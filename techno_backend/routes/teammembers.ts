// import mailer from "../nodeMails/mailer";
// import thankMailer from "../nodeMails/thankMailer";
// import otpEmail from "../nodeMails/otpMailer";
// import registeredEventMailer from "../nodeMails/registeredMailer";
// import xlsx from "xlsx";
// import fs from "fs";
// import path from "path";
// import os from "os";

import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
////////////////////////////////

//Team-members
router.get(
	"/api/participant/teamMembers/:teamId",
	async (req: Request, res: Response) => {
		const teamId = req.params.teamId;
		try {
			const participants = await prisma.participant.findMany({
				where: {
					teamId: teamId,
				},
			});
			res.json(participants);
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

router.get(
	"/api/myParticipations/allTeam/:email",
	async (req: Request, res: Response) => {
		const email = req.params.email;
		try {
			const participants = await prisma.participant.findMany({
				where: {
					participantEmail: email,
				},
			});
			const rawResult = await Promise.all(
				participants.map(async (p) => {
					const eventDetails = await prisma.event.findUnique({
						where: { eventId: p.eventId?.toString() },
					});
					let leader: string | null = p.teamId.split(
						`team_${eventDetails?.eventName}_`
					)[1];
					const teamDetails = await prisma.participant.findMany({
						where: { teamId: p.teamId },
					});
					const rawTeamMembers = await Promise.all(
						teamDetails.map(async (t) => {
							const userDetails = await prisma.user.findUnique({
								where: { userEmail: t.participantEmail },
							});
							if (t.participantEmail === leader) {
								leader = userDetails?.userName
									? userDetails.userName
									: null;
								return null;
							} else {
								return userDetails?.userName;
							}
						})
					);
					const finalMembers = rawTeamMembers.filter(
						(member) => member !== null
					);
					const items = {
						event: {
							eventName: eventDetails?.eventName,
							teamSize: eventDetails?.teamSize,
						},
						leader: leader,
						teamMembers: finalMembers,
					};
					return items;
				})
			);
			res.status(201).json(rawResult);
		} catch (error) {
			res.status(500).send(`Error fetching participants : ${error}`);
		}
	}
);

module.exports = router;
