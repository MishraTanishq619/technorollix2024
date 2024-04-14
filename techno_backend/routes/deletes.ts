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

// Delete APIs

router.delete(
	"/api/delete/event/ekKhatam",
	async (req: Request, res: Response) => {
		try {
			const { eventId } = req.body;
			const deletedEvent = await prisma.event.delete({
				where: { eventId: eventId },
			});
			res.status(200).send(`Event deleted: ${deletedEvent}`);
		} catch (error: any) {
			res.status(500).send(`Error deleting event: ${error.message}`);
		}
	}
);

router.delete(
	"/api/delete/event/purakhatam",
	async (req: Request, res: Response) => {
		try {
			await prisma.event.deleteMany({});
			res.status(200).send(`All events deleted`);
		} catch (error: any) {
			res.status(500).send(`Error deleting events: ${error.message}`);
		}
	}
);

router.delete(
	"/api/delete/team/purakhatam",
	async (req: Request, res: Response) => {
		try {
			await prisma.registeredTeam.deleteMany({});
			res.status(200).send(`All teams deleted`);
		} catch (error: any) {
			res.status(500).send(`Error deleting teams: ${error.message}`);
		}
	}
);

router.delete(
	"/api/delete/team/ekKhatam",
	async (req: Request, res: Response) => {
		try {
			const { teamId } = req.body;
			const deletedTeam = await prisma.registeredTeam.delete({
				where: { teamId: teamId },
			});
			res.status(200).send(`Team deleted: ${deletedTeam}`);
		} catch (error: any) {
			res.status(500).send(`Error deleting team: ${error.message}`);
		}
	}
);

router.delete(
	"/api/delete/user/purakhatam",
	async (req: Request, res: Response) => {
		try {
			await prisma.user.deleteMany({});
			res.status(200).send(`All users deleted`);
		} catch (error: any) {
			res.status(500).send(`Error deleting users: ${error.message}`);
		}
	}
);

router.delete(
	"/api/delete/user/ekKhatam",
	async (req: Request, res: Response) => {
		try {
			const { userEmail } = req.body;
			const deletedUser = await prisma.user.delete({
				where: { userEmail: userEmail },
			});
			res.status(200).send(`User deleted: ${deletedUser}`);
		} catch (error: any) {
			res.status(500).send(`Error deleting user: ${error.message}`);
		}
	}
);

router.delete(
	"/api/delete/invitation/purakhatam",
	async (req: Request, res: Response) => {
		try {
			await prisma.invitation.deleteMany({});
			res.status(200).send(`All invitations deleted`);
		} catch (error: any) {
			res.status(500).send(
				`Error deleting invitations: ${error.message}`
			);
		}
	}
);

router.delete(
	"/api/delete/participants/purakhatam",
	async (req: Request, res: Response) => {
		try {
			await prisma.participant.deleteMany({});
			res.status(200).send(`All participants deleted`);
		} catch (error: any) {
			res.status(500).send(
				`Error deleting participants: ${error.message}`
			);
		}
	}
);

router.delete(
	"/api/delete/participant/ekKhatam",
	async (req: Request, res: Response) => {
		try {
			const { eventId, teamId, participantEmail } = req.body;
			const deletedParticipant = await prisma.participant.deleteMany({
				where: {
					eventId,
					teamId,
					participantEmail,
				},
			});
			res.status(200).send(`Participant deleted: ${deletedParticipant}`);
		} catch (error: any) {
			res.status(500).send(
				`Error deleting participant: ${error.message}`
			);
		}
	}
);

router.delete(
	"/api/delete/receipt/ekKhatam",
	async (req: Request, res: Response) => {
		try {
			const {
				userEmail,
				paymentId,
			}: { userEmail: string; paymentId: string } = req.body;
			const deletedReceipt = await prisma.paymentReceipt.deleteMany({
				where: { userEmail: userEmail, paymentId: paymentId },
			});
			res.status(200).send(`Receipt deleted: ${deletedReceipt}`);
		} catch (error: any) {
			res.status(500).send(`Error deleting receipt: ${error.message}`);
		}
	}
);

router.delete(
	"/api/delete/invitation/bySender/invitationId",
	async (req: Request, res: Response) => {
		const { invitationId } = req.body;
		try {
			const invitation = await prisma.invitation.findFirst({
				where: { invitationId: invitationId },
				// include: { participants: true },
			});
			if (invitation) {
				await prisma.invitation.delete({
					where: { invitationId: invitationId },
				});
				return res.status(200).json(`Invitation successfully deleted`);
				// if (invitation.participants.length === 0) {
				// 	await prisma.invitation.delete({
				// 		where: { invitationId: invitationId },
				// 	});
				// 	return res
				// 		.status(200)
				// 		.json(`Invitation successfully deleted`);
				// } else {
				// 	return res
				// 		.status(404)
				// 		.json(`Invitation not found or already accepted`);
				// }
			} else {
				return res.status(404).json(`Invitation not found`);
			}
		} catch (error: any) {
			res.status(500).send(`Error deleting invitation: ${error.message}`);
		}
	}
);

module.exports = router;
