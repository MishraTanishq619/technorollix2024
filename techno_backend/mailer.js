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


async function makeMessage(recieversList, teamId) {
	// const invitationDetails = invitationDets(teamId,recieversList)

	const invitation = await Invitation.findOne({ teamId: teamId, inviteeEmail: recieversList });
	const event = await Event.findOne({ eventId: invitation.eventId });
	const user = await User.findOne({ userEmail: invitation.inviterEmail })
	try {

		const message = {

			from: '"TechnoRollix 2k24" <technorollix@opju.ac.in>', // sender address

			to: recieversList, // list of receivers

			subject: `Invitaion from ${user.userName} to join his team for ${event.eventName}`, // Subject line

			// text: `This invitation is sent by ${user.userName}`, // plain text body
			//     or
			html: `<b>This invitation is sent by ${user.userName}</b>
			<p>He/she wants you to join his team in Technorollix 2k24's event ${event.eventName} hosted by O.P. Jindal University Raigarh, Chhattisgarh</p>
			<a href="https://codeforit.in">Invitation Link</a>
			<h3>Thank you</h3>
			`, // html body

			// attachments: [
			// 	{
			// 		filename: "Text.txt",
			// 		path: "./new.txt",
			// 	},
			// ],
		};

		return message;
	} catch (error) {
		return "error"
	}
}

// async..await is not allowed in global scope, must use a wrapper
async function main(listOfRecievers, teamId) {
	try {
		// send mail with defined transport object
		let message = await makeMessage(listOfRecievers, teamId);
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

module.exports = main;
