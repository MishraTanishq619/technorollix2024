// // How to Use :

// const mailer = require("./mailer");
// await mailer(["email@hiascs.com", "email@hiascs.com"]);

const nodemailer = require("nodemailer");
const { Event, Invitation, User } = require("./db");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		// from google smtp ,
		user: "techfest@opju.ac.in",
		pass: "goyw scee bzxo dflo", // from app passkeys
	},
});


async function makeEventMessage(leader, eventIdArr) {
	try {
		const events = await Event.find(); // Use await to ensure events are retrieved before filtering
		const user = await User.findOne({ userEmail: leader });
		let reqEvents = events.filter((e) => eventIdArr.includes(e.eventId));
		console.log(events);
		console.log("Filtered events:", reqEvents); // Log filtered events to check if data is correct

		let eventsHtml = "";

		reqEvents.forEach((event) => {
			eventsHtml += `
		<div style="background-color: #333; color: #fff; padding: 20px; margin-bottom: 20px;">
		<h2 style="font-size: 20px; font-weight: bold;">Event Name: ${event.eventName}</h2>
		<div style="margin-top: 10px;">
			<p style="font-size: 16px; font-weight: bold;">Entry Fee: ${event.entryFee}</p>
			<p style="font-size: 16px; font-weight: bold;">Prize Money: ${event.priceMoney}</p>
			<p style="font-size: 16px; font-weight: bold;">Team Size: ${event.teamSize}</p>
		</div>
	</div>
		`;
		});
		let accommodationLink = "";
		if (!user.isUserOPJUStudent) {
			accommodationLink = `<h2><a href="https://docs.google.com/forms/d/e/1FAIpQLSczoPzhwQMTQ-ZPzPB1GYGQvIoR8N5yi1_ADyFdj2xyNZfIAQ/viewform?usp=sf_link">Accommodation Form</a></h2>`;
		}
		const message = {
			from: '"TechnoRollix 2k24" <technorollix@opju.ac.in>',
			to: leader,
			subject: `Confirmation `,
			// html: `<b>You ${user.userName} have successfully registered in</b>${eventsHtml}<a href="http://technorollix.opju.ac.in">Visit us</a><h3>Thank you</h3>`,
			html: `<div style="text-align: center;">
		
		<h1 style="font-size: 36px;">May the Force Be With You, ${user.userName}</h1>
		<p style="font-size: 20px;">You have successfully registered for the following events:</p>
	
		<!-- Event details -->
		${eventsHtml}
	
		<!-- Accommodation link (if applicable) -->
		${accommodationLink}
	
		<!-- Visit TechnoRollix website -->
		<p style="font-size: 20px;">Explore more about TechnoRollix at <a href="http://technorollix.opju.ac.in" style="color: #ffffff;">technorollix.opju.ac.in</a></p>
	
		<!-- Thank you message -->
		<h3 style="font-size: 24px;">Thank you and may the Force be with you!</h3>
	  </div>`,
		};

		return message;
	} catch (error) {
		console.error("Error in makeEventMessage:", error);
		return "error";
	}
}


// async..await is not allowed in global scope, must use a wrapper
async function mainEventEmail(leader, eventIdArr) {
	try {
		// send mail with defined transport object
		let message = await makeEventMessage(leader, eventIdArr);
		const info = await transporter.sendMail(message, (err, info) => {
			if (err) {
				console.log(err);
			} else {
				console.log("Message sent: %s", info.messageId);
			}
		});
		return info;
	} catch (error) {
		console.log(error);
		return "Error Occured";
	}
}

module.exports = mainEventEmail;
