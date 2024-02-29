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

async function makeOtpMessage(user, otpNumber) {
	try {
		const message = {
			from: '"TechnoRollix 2k24" <technorollix@opju.ac.in>',
			to: user,
			subject: `May the Force Be With You: Verify Your Email for Technorollix!`,
			html: `
      <p>Dear Jedi Padawan,</p>
      <p>Greetings from a galaxy far, far away! We hope this message finds you well and ready to embark on an epic journey into the realms of technology and culture.</p>
      <p>As a distinguished member of the Technorollix community, your presence is crucial in shaping the destiny of our national tech cultural event, unfolding amidst the illustrious halls of OP Jindal University on the planet Raigarh.</p>
      <p>To ensure that your entry into our galactic gathering is secure and seamless, we require your verification. A single step towards this goal lies in confirming your email address, a pivotal aspect of your journey.</p>
      <p>Your One-Time Passcode (OTP), akin to a lightsaber in your arsenal, awaits you:</p>
      <p class="otp-code">${otpNumber}</p>
      <p>May this code serve as your beacon, guiding you through the verification process and granting you access to the wonders that await at Technorollix.</p>
      <p>Remember, in this vast universe of technology and innovation, your participation is essential, for together, we shall ignite the sparks of creativity and forge new alliances.</p>
      <p>May the Force be with you as you undertake this noble quest!</p>
      <p>With cosmic regards,</p></br>
	  <h3><a href="http://technorollix.opju.ac.in">The United Army of Technorollix</a></h3>`,
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
