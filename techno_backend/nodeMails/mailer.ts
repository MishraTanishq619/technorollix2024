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

async function makeMessage(
	recieversList: string[],
	teamId: string
): Promise<any> {
	try {
		const invitations = await prisma.invitation.findMany({
			where: {
				teamId: teamId,
				inviteeEmail: {
					in: recieversList,
				},
			},
		});

		const eventIds = invitations.map((invitation) => invitation.eventId);
		const userIds = invitations.map(
			(invitation) => invitation.inviterEmail
		);

		let events: any[] = [];
		let users: any[] = [];

		if (eventIds.length > 0) {
			events = await prisma.event.findMany({
				where: {
					eventId: {
						in: eventIds,
					},
				},
			});
		}

		if (userIds.length > 0) {
			users = await prisma.user.findMany({
				where: {
					userEmail: {
						in: userIds,
					},
				},
			});
		}

		const messages = invitations.map((invitation) => {
			const event = events.find(
				(event) => event.eventId === invitation.eventId
			);
			const user = users.find(
				(user) => user.userEmail === invitation.inviterEmail
			);

			if (!event || !user) {
				throw new Error("Event or User not found");
			}

			return {
				from: '"TechnoRollix 2k24"',
				to: invitation.inviteeEmail,
				subject: `Invitation from ${user.userName} to join his team for ${event.eventName}`,
				html: `<b>This invitation is sent by ${user.userName}</b>
			<p>He/she wants you to join his/her team in Technorollix 2k24's event ${event.eventName} hosted by O.P. Jindal University Raigarh, Chhattisgarh</p>
			<h1><a href="http://technorollix_Backend">Invitation Link</a></h1>
			<h3>Thank you</h3>`,
			};
		});

		return messages;
	} catch (error) {
		console.error("Error in makeMessage:", error);
		return "error";
	}
}

// async..await is not allowed in global scope, must use a wrapper

async function mailer(listOfRecievers: string[], teamId: string): Promise<any> {
	try {
		// send mail with defined transport object
		let message = await makeMessage(listOfRecievers, teamId);
		const info = await transporter.sendMail(message);

		console.log("Message sent: %s", info.messageId);
		return info;
	} catch (error) {
		console.log(error);
		return "Error Occurred";
	}
}

export default mailer;
