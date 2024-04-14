import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		// from google smtp ,
		user: "mishratanishq619@gmail.com",
		pass: "hhxh goar pmre jwns ", // from app passkeys
	},
});

async function makeOtpMessage(user: string, otpNumber: string): Promise<any> {
	try {
		const message = {
			from: '"TechnoRollix 2k24"',
			to: user,
			subject: `May the Force Be With You: Verify Your Email for Technorollix! Otp ${otpNumber}`,
			html: `
		  <p>Dear Jedi Padawan,</p>
		  <p>Greetings from a galaxy far, far away! We hope this message finds you well and ready to embark on an epic journey into the realms of technology and culture.</p>
		  <p>As a distinguished member of the Technorollix community, your presence is crucial in shaping the destiny of our national tech cultural event, unfolding amidst the illustrious halls of OP Jindal University on the planet Raigarh.</p>
		  <p>To ensure that your entry into our galactic gathering is secure and seamless, we require your verification. A single step towards this goal lies in confirming your email address, a pivotal aspect of your journey.</p>
		  <p>Your One-Time Passcode (OTP), akin to a lightsaber in your arsenal, awaits you:</p>
		  <h1 class="otp-code">${otpNumber}</h1>
		  <p>May this code serve as your beacon, guiding you through the verification process and granting you access to the wonders that await at Technorollix.</p>
		  <p>Remember, in this vast universe of technology and innovation, your participation is essential, for together, we shall ignite the sparks of creativity and forge new alliances.</p>
		  <p>May the Force be with you as you undertake this noble quest!</p>
		  <p>With cosmic regards,</p></br>
		  <h3><a href="http://technorollix_Backend">The United Army of Technorollix</a></h3>`,
		};

		return message;
	} catch (error) {
		console.error("Error in makeEventMessage:", error);
		return "error";
	}
}

// async..await is not allowed in global scope, must use a wrapper
async function otpEmail(user: string, otpNumber: string): Promise<any> {
	try {
		// send mail with defined transport object
		let message = await makeOtpMessage(user, otpNumber);
		const info = await transporter.sendMail(message);

		console.log("Message sent: %s", info.messageId);
		return info;
	} catch (error) {
		console.log(error);
		return "Error Occurred";
	}
}
export default otpEmail;
