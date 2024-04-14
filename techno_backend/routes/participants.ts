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

// Participants

router.post(
	"/api/register/participant",
	async (req: Request, res: Response) => {
		// const { teamId, participantEmail } = req.body;
		const {
			teamId,
			participantEmail,
		}: { teamId: string; participantEmail: string } = req.body;

		try {
			const team = await prisma.registeredTeam.findUnique({
				where: { teamId },
			});
			if (!team) {
				return res
					.status(404)
					.send(`Team is not registered: Team-id: ${teamId}`);
			}
			const user = await prisma.user.findUnique({
				where: { userEmail: participantEmail },
			});
			if (!user) {
				return res
					.status(404)
					.send(`User is not registered: Email: ${participantEmail}`);
			}
			const isParticipated = await prisma.participant.findFirst({
				where: {
					teamId: teamId,
					participantEmail: participantEmail,
				},
			});
			if (isParticipated) {
				return res
					.status(409)
					.json(
						`User: ${participantEmail} already registered with team: ${teamId}`
					);
			}
			const participant = await prisma.participant.create({
				data: {
					teamId: teamId,
					participantEmail: participantEmail,
				},
			});
			res.json(participant);
		} catch (error) {
			res.status(500).send(
				`Error registering user ${participantEmail} with team ${teamId} \nerror: ${error}`
			);
		}
	}
);

router.get("/api/allParticipants", async (req: Request, res: Response) => {
	try {
		const participants = await prisma.participant.findMany();
		res.json(participants);
	} catch (error) {
		res.status(500).send(`Error fetching participants: ${error}`);
	}
});

router.get(
	"/api/participant/eventId/:email",
	async (req: Request, res: Response) => {
		const participantEmail = req.params.email;
		try {
			const participants = await prisma.participant.findMany({
				where: { participantEmail: participantEmail },
				select: { eventId: true },
			});
			const eventIdArray = participants.map(
				(participant) => participant.eventId
			);
			res.json(eventIdArray);
		} catch (error) {
			res.status(500).send(`Error fetching participants: ${error}`);
		}
	}
);

router.get("/api/participant/:email", async (req: Request, res: Response) => {
	const participantEmail = req.params.email;
	try {
		const participants = await prisma.participant.findMany({
			where: { participantEmail: participantEmail },
		});
		const totalParticipation = await prisma.participant.count({
			where: { participantEmail: participantEmail },
		});
		res.json({ totalParticipation, participants });
	} catch (error) {
		res.status(500).send(`Error fetching participants: ${error}`);
	}
});

router.get(
	"/api/participants/count/perEvent/:eventId",
	async (req: Request, res: Response) => {
		const eventId = req.params.eventId;
		try {
			const participants = await prisma.participant.findMany({
				where: { eventId: eventId },
			});
			let insiderUser = [];
			let outsiderUser = [];
			participants.forEach((element) => {
				// Extract the email domain from the participant's email address
				const emailDomain = element.participantEmail.split("@")[1];
				// Check if the email domain is 'opju.ac.in'
				if (emailDomain === "opju.ac.in") {
					insiderUser.push(element.participantEmail);
				} else {
					outsiderUser.push(element.participantEmail);
				}
			});
			let insiderCount = insiderUser.length;
			let outsiderCount = outsiderUser.length;
			let totalCount = insiderUser.length + outsiderUser.length;
			res.status(201).json({ insiderCount, outsiderCount, totalCount });
		} catch (error) {
			res.status(500).send(`Error fetching registered teams: ${error}`);
		}
	}
);

router.get(
	"/api/allOutSiderParticipants",
	async (req: Request, res: Response) => {
		try {
			const participants = await prisma.participant.findMany();
			const leaderDetailsPromises = participants.map(async (element) => {
				const data = await prisma.user.findUnique({
					where: { userEmail: element.participantEmail },
				});
				return data;
			});
			const leaderDetails = await Promise.all(leaderDetailsPromises);
			const outsidersLeaders = leaderDetails.filter(
				(user) => user && !user.isUserOPJUStudent
			);
			const outSiderCount = outsidersLeaders.length;
			res.json({ outSiderCount, outsidersLeaders });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.get(
	"/api/allOutSiderParticipants/eventId/teamId",
	async (req: Request, res: Response) => {
		try {
			const participants = await prisma.participant.findMany();
			let insiderUser: object[] = [];
			let outsiderUser: object[] = [];
			participants.forEach((element) => {
				// Extract the email domain from the participant's email address
				const emailDomain = element.participantEmail.split("@")[1];
				// Check if the email domain is 'opju.ac.in'
				if (emailDomain === "opju.ac.in") {
					insiderUser.push(element);
				} else {
					outsiderUser.push(element);
				}
			});
			let outsideCount = outsiderUser.length;
			res.status(201).json({ outsideCount, outsiderUser });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.get(
	"/api/allInSiderParticipants/eventId/teamId",
	async (req: Request, res: Response) => {
		try {
			const participants = await prisma.participant.findMany();
			let insiderUser: object[] = [];
			let outsiderUser: object[] = [];
			participants.forEach((element) => {
				// Extract the email domain from the participant's email address
				const emailDomain = element.participantEmail.split("@")[1];
				// Check if the email domain is 'opju.ac.in'
				if (emailDomain === "opju.ac.in") {
					insiderUser.push(element);
				} else {
					outsiderUser.push(element);
				}
			});
			let insideCount = insiderUser.length;
			res.status(201).json({ insideCount, insiderUser });
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

module.exports = router;
