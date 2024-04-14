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

async function makeMessage(recieversList: string[]): Promise<any> {
	try {
		const user = await prisma.user.findUnique({
			where: {
				userEmail: recieversList[0],
			},
		});

		if (!user) {
			throw new Error("User not found");
		}

		const message = {
			from: "TechnoRollix 2k24", // sender address
			to: recieversList, // list of receivers
			subject: `Gratitude for Your Registration to Technorollix: An Interstellar Event at OP Jindal University`, // Subject line
			html: `<b>Dear Padawan ${user.userName},</b></br>
            <p>May the stars guide your path as you venture forth into the realm of knowledge and innovation. It is with profound appreciation and reverence that I extend my sincerest gratitude on behalf of the Technorollix Council for your enrollment in our esteemed event at OP Jindal University.</p></br>            
            <p>Your decision to participate in Technorollix, an event of galactic magnitude, speaks volumes of your dedication to honing your skills and embracing the wonders of technology within the halls of OP Jindal University. We are honored to have you join us as we navigate the cosmic seas of discovery and enlightenment.</p></br>            
            <p>Prepare yourself for an odyssey through the cosmos as Technorollix unfurls its tapestry of workshops, challenges, and interactive sessions, each designed to challenge your intellect and ignite your imagination. Amidst the stellar backdrop of camaraderie and collaboration, you will forge connections that transcend planetary boundaries and unlock the mysteries of the digital universe.</p></br>            
            <p>As stewards of this cosmic voyage, we are committed to crafting an event that surpasses earthly expectations, aiming to inspire, empower, and propel each participant towards greatness. In the days to come, we will transmit detailed transmissions containing essential information regarding the event itinerary, competition guidelines, and any other directives necessary for your journey.</p></br>            
            <p>Once more, we extend our deepest gratitude for your enrollment and unwavering commitment to Technorollix at OP Jindal University. Should you require guidance or seek answers to your inquiries, do not hesitate to reach out through the channels of communication available.</p></br>            
            <p>Anticipate an interstellar convergence of knowledge and camaraderie at Technorollix—an event that transcends the boundaries of space and time.</p></br>            
            <p>With the stars as our guide</p></br>
            <p>OP Jindal University</p>
            <h3><a href="http://technorollix_Backend">The United Army of Technorollix</a></h3>
            `, // html body
			attachments: [
				{
					filename: "Technorollix.pdf",
					path: "https://drive.google.com/file/d/121-kldbdAm64LvIae0tFC1sChtF0WeMg/view?pli=1",
				},
			],
		};

		return message;
	} catch (error) {
		console.error(error);
		return "error";
	} finally {
		await prisma.$disconnect();
	}
}

// async..await is not allowed in global scope, must use a wrapper

async function thankMailer(listOfRecievers: string[]): Promise<any> {
	try {
		// send mail with defined transport object
		let message = await makeMessage(listOfRecievers);
		const info = await transporter.sendMail(message);
		console.log("Message sent: %s", info.messageId);
		return info;
	} catch (error) {
		console.log(error);
		return "Error Occured";
	}
}

export default thankMailer;
