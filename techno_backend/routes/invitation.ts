import mailer from "../nodeMails/mailer";
import thankMailer from "../nodeMails/thankMailer";
import otpEmail from "../nodeMails/otpMailer";
import registeredEventMailer from "../nodeMails/registeredMailer";
import xlsx from "xlsx";
import fs from "fs";
import path from "path";
import os from "os";

import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
////////////////////////////////

// Invitation

router.post("/api/create/team-invite", async (req: Request, res: Response) => {
	const { teamId, inviterEmail, inviteeEmail } = req.body;
	console.log(teamId);
	console.log(inviterEmail);
	console.log(inviteeEmail);
	try {
		const team = await prisma.registeredTeam.findUnique({
			where: { teamId: teamId },
		});
		if (!team) {
			return res
				.status(404)
				.send(`Team is not registered: Team-id: ${teamId}`);
		}
		const user = await prisma.user.findUnique({
			where: { userEmail: inviterEmail },
		});
		if (!user) {
			return res
				.status(404)
				.send(`User is not registered: Email: ${inviterEmail}`);
		}
		const event = await prisma.event.findUnique({
			where: { eventId: team.eventId },
		});
		if (team.leader !== user.userEmail || (event && event.teamSize < 2)) {
			return res.status(409).json({
				error: `Error1 Inviting user ${inviteeEmail} with team ${teamId} by leader ${inviterEmail} \nerror: ${Error}`,
			});
		}
		const totalInvitation = await prisma.invitation.count({
			where: {
				inviterEmail: inviterEmail,
				teamId: teamId,
				status: { not: "rejected" },
			},
		});
		const isInvited = await prisma.invitation.findFirst({
			where: {
				teamId: teamId,
				inviterEmail: inviterEmail,
				inviteeEmail: inviteeEmail,
			},
		});
		if (isInvited) {
			if (isInvited.status === "pending") {
				return res
					.status(410)
					.json(
						`User: ${inviteeEmail} already invited to join team: ${teamId}`
					);
			} else if (isInvited.status === "rejected") {
				return res
					.status(411)
					.json(
						`User: ${inviteeEmail} have rejected invitation to join team: ${teamId}`
					);
			} else {
				return res
					.status(412)
					.json(`User: ${inviteeEmail} has joined different team`);
			}
		}
		const hasJoined = await prisma.participant.findFirst({
			where: {
				eventId: team.eventId,
				participantEmail: inviteeEmail,
			},
		});
		if (hasJoined) {
			return res
				.status(413)
				.json(
					`User: ${inviteeEmail} has joined different team for ${team.eventId}`
				);
		}
		if (totalInvitation < (event ? event.teamSize : 1) - 1) {
			const invitationId = generateInvitationId(teamId, inviteeEmail); // Define the function to generate invitationId
			const invitation = await prisma.invitation.create({
				data: {
					invitationId: invitationId,
					eventId: team.eventId,
					teamId: teamId,
					inviterEmail: inviterEmail,
					inviteeEmail: inviteeEmail,
				},
			});
			console.log(invitation);
			// Assuming mailer is a function that sends an email to the invitee
			const sendMail = await mailer([invitation.inviteeEmail], teamId);
			res.status(201).json(invitation);
		} else {
			return res.status(414).send(`Error3 Limit cross`);
		}
	} catch (error) {
		res.status(500).send(
			`Error2 Inviting user ${inviteeEmail} with team ${teamId} by leader ${inviterEmail} \nerror: ${error}`
		);
	}
});

router.put("/api/update/team-invite", async (req: Request, res: Response) => {
	const { teamId, inviterEmail, inviteeEmail, response } = req.body;
	try {
		const acceptedInvite = await prisma.invitation.updateMany({
			where: {
				teamId,
				inviteeEmail,
				status: "pending",
			},
			data: {
				status: response === "accept" ? "accepted" : "rejected",
			},
		});

		const invitation = await prisma.registeredTeam.findUnique({
			where: { teamId: teamId },
		});
		// If accepted, decline other invitations for the same event
		if (response === "accept") {
			await prisma.invitation.updateMany({
				where: {
					eventId: invitation?.eventId,
					inviteeEmail: inviteeEmail,
					status: { not: "accepted" },
				},
				data: { status: "rejected" },
			});
			const registered = await prisma.participant.create({
				data: {
					eventId: invitation ? invitation.eventId : "",
					teamId: teamId,
					participantEmail: inviteeEmail,
				},
			});
			return res.status(200).json({
				result: `Invitation accepted: ${invitation?.eventId}`,
				registered,
			});
		} else {
			return res.status(404).send("rejected");
		}
	} catch (error) {
		res.status(500).send(
			`Error responding user ${inviterEmail} invitation for ${teamId}\nerror: ${error}`
		);
	}
});

router.put("/api/restore/team-invite", async (req: Request, res: Response) => {
	try {
		const allInvitations = await prisma.invitation.findMany();
		const waiting = allInvitations.map(async (i) => {
			const participation = await prisma.participant.findFirst({
				where: {
					teamId: i.teamId,
					participantEmail: i.inviteeEmail,
				},
			});
			if (participation !== null) {
				const acceptedInvite = await prisma.invitation.updateMany({
					where: {
						teamId: i.teamId,
						inviteeEmail: i.inviteeEmail,
						inviterEmail: i.inviterEmail,
					},
					data: { status: "accepted" },
				});
				return acceptedInvite;
			} else {
				const pendingInvite = await prisma.invitation.updateMany({
					where: {
						teamId: i.teamId,
						inviteeEmail: i.inviteeEmail,
						inviterEmail: i.inviterEmail,
					},
					data: { status: "rejected" },
				});
				return pendingInvite;
			}
		});
		const result = await Promise.all(waiting);
		// return res.status(201).json({ total: result.length, result: result });
	} catch (error) {
		res.status(500).send(
			`Error responding user invitation\nerror: ${error}`
		);
	}
});

router.delete(
	"/api/delete/team/invite",
	async (req: Request, res: Response) => {
		const { teamId, inviterEmail, inviteeEmail } = req.body;
		try {
			console.log("deleting");
			console.log(teamId);
			console.log(inviterEmail);
			console.log(inviteeEmail);
			await prisma.invitation.deleteMany({
				where: {
					teamId: teamId,
					inviteeEmail: inviteeEmail,
					inviterEmail: inviterEmail,
				},
			});
			console.log("deleted");
			return res.status(200).json({
				result: `Invitation deleted:`,
			});
		} catch (error) {
			res.status(500).send(
				`Error responding user invitation\nerror: ${error}`
			);
		}
	}
);

router.get(
	"/api/event/invitations/email/:email",
	async (req: Request, res: Response) => {
		const request = req.params.email;
		try {
			const invitation = await prisma.invitation.findMany({
				where: {
					inviteeEmail: request,
					status: "pending",
				},
			});
			const totalInvitation = await prisma.invitation.count({
				where: {
					inviteeEmail: request,
					status: "pending",
				},
			});
			res.json({ totalInvitation, invitation });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.get(
	"/api/eventName/inviterName/invitations/email/:email",
	async (req: Request, res: Response) => {
		const request = req.params.email;
		try {
			const rawInvitations = await prisma.invitation.findMany({
				where: {
					inviteeEmail: request,
					status: "pending",
				},
			});
			const eventDetailsPromises = rawInvitations.map(async (element) => {
				const [event, inviter] = await Promise.all([
					prisma.event.findUnique({
						where: { eventId: element.eventId },
					}),
					prisma.user.findUnique({
						where: { userEmail: element.inviterEmail },
					}),
				]);
				const invites = {
					invitationId: element.invitationId,
					status: element.status,
					eventName: event?.eventName,
					teamId: element.teamId,
					inviterName: inviter?.userName,
					inviteeEmail: element.inviteeEmail,
				};
				return invites;
			});
			const invitation = await Promise.all(eventDetailsPromises);
			const totalInvitation = await prisma.invitation.count({
				where: {
					inviteeEmail: request,
					status: "pending",
				},
			});
			res.json({ totalInvitation, invitation });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.get(
	"/api/event/invitations/inviteId/:invitationId",
	async (req: Request, res: Response) => {
		const request = req.params.invitationId;
		try {
			const invitation = await prisma.invitation.findMany({
				where: {
					invitationId: request,
				},
			});
			const totalInvitation = await prisma.invitation.count({
				where: {
					invitationId: request,
				},
			});
			res.json(invitation);
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.get(
	"/api/event/invite/status/:email",
	async (req: Request, res: Response) => {
		const request = req.params.email;
		try {
			const invitation = await prisma.invitation.findMany({
				where: {
					inviterEmail: request,
				},
			});
			const totalInvitation = await prisma.invitation.count({
				where: {
					inviterEmail: request,
				},
			});
			res.json({ totalInvitation, invitation });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.post(
	"/api/event/invite/status/byInviter/teamId",
	async (req: Request, res: Response) => {
		const { inviterEmail, teamId } = req.body;
		try {
			const invitation = await prisma.invitation.findMany({
				where: {
					inviterEmail: inviterEmail,
					teamId: teamId,
				},
			});
			const totalInvitation = await prisma.invitation.count({
				where: {
					inviterEmail: inviterEmail,
					teamId: teamId,
				},
			});
			res.json({ totalInvitation, invitation });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.post(
	"/api/event/invite/status/byInviter/eventId",
	async (req: Request, res: Response) => {
		const { inviterEmail, eventId } = req.body;
		try {
			const invitation = await prisma.invitation.findMany({
				where: {
					inviterEmail: inviterEmail,
					eventId: eventId,
				},
			});
			const totalInvitation = await prisma.invitation.count({
				where: {
					inviterEmail: inviterEmail,
					eventId: eventId,
				},
			});
			res.json({ totalInvitation, invitation });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.get("/api/event/allInvites", async (req: Request, res: Response) => {
	try {
		const invitation = await prisma.invitation.findMany();
		const totalInvitation = await prisma.invitation.count();
		res.json({ totalInvitation, invitation });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

// Functions

function generateEventId(eventName: string, type?: string): string {
	const first5Chars = eventName.slice(0, 5);
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = (currentDate.getMonth() + 1)
		.toString()
		.padStart(2, "0");
	const typeId = type ? `${type}_` : "";

	const eventId = `${first5Chars}_${currentYear}${currentMonth}`;

	return `${typeId}${eventId}`;
}

function generateTeamId(eventName: string, leader: string): string {
	const eventChars = eventName.slice(0, 5);

	const teamId = `team_${eventChars}_${leader}`;

	return teamId;
}

function generateInvitationId(teamId: string, inviteeEmail: string): string {
	const invitationId = `invite_${teamId}_${inviteeEmail}`;

	return invitationId;
}

module.exports = router;
