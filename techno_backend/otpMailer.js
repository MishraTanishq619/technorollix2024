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
		pass: "iocq rcpd axpi flir", // from app passkeys
	},
});

async function makeOtpMessage(user, otpNumber) {
	try {
		const message = {
			from: '"TechnoRollix 2k24" <technorollix@opju.ac.in>',
			to: user,
			subject: `Confirmation `,
			html: `<b>Your otp is ${otpNumber}</b> </br><a href="https://codeforit.in">Visit us</a><h3>Thank you</h3>`,
		};

		return message;
	} catch (error) {
		console.error("Error in makeEventMessage:", error);
		return "error";
	}
}

// async..await is not allowed in global scope, must use a wrapper
async function otpEmail(user, otpNumber) {
	try {
		// send mail with defined transport object
		let message = await makeOtpMessage(user, otpNumber);
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

module.exports = otpEmail;
