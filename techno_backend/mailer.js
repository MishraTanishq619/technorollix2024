// // How to Use :

// const mailer = require("./mailer");
// await mailer(["email@hiascs.com", "email@hiascs.com"]);

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		// from google smtp ,
		user: "mishratanishq619@gmail.com",
		pass: "uxlj ddyl obvi afec ", // from app passkeys
	},
});

function makeMessage(recieversList) {
	const message = {
		from: '"NodeMailer-Sender" <mishratanishq619@gmail.com>', // sender address

		to: recieversList.join(","), // list of receivers

		subject: "This is subject.", // Subject line

		text: "This is body.", // plain text body
		//     or
		// html: "<b>This is HTML.</b>", // html body

		// attachments: [
		// 	{
		// 		filename: "Text.txt",
		// 		path: "./new.txt",
		// 	},
		// ],
	};

	return message;
}

// async..await is not allowed in global scope, must use a wrapper
async function main(listOfRecievers) {
	try {
		// send mail with defined transport object
		let message = makeMessage(listOfRecievers);
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
