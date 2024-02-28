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
		  <div>
			<div>
			  <h2 className="text-lg font-bold text-white">Event Name: ${event.eventName}</h2>
			  <h2 className="text-lg font-bold text-white">Entry Fee: ${event.entryFee}</h2>
			  <p className="text-lg font-bold text-white">Prize Money: ${event.priceMoney}</p>
			  <p className="text-lg font-bold text-white">Team Size: ${event.teamSize}</p>
			</div>
		  </div>
		`;
	  });
  
	  const message = {
		from: '"TechnoRollix 2k24" <technorollix@opju.ac.in>',
		to: leader,
		subject: `Confirmation `,
		html: `<b>You ${user.userName} have successfully registered in</b>${eventsHtml}<a href="https://codeforit.in">Visit us</a><h3>Thank you</h3>`,
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
