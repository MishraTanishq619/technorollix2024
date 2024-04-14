"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
////////////////////////////////
// Participants
router.post("/api/register/participant", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { teamId, participantEmail } = req.body;
    const { teamId, participantEmail, } = req.body;
    try {
        const team = yield prisma.registeredTeam.findUnique({
            where: { teamId },
        });
        if (!team) {
            return res
                .status(404)
                .send(`Team is not registered: Team-id: ${teamId}`);
        }
        const user = yield prisma.user.findUnique({
            where: { userEmail: participantEmail },
        });
        if (!user) {
            return res
                .status(404)
                .send(`User is not registered: Email: ${participantEmail}`);
        }
        const isParticipated = yield prisma.participant.findFirst({
            where: {
                teamId: teamId,
                participantEmail: participantEmail,
            },
        });
        if (isParticipated) {
            return res
                .status(409)
                .json(`User: ${participantEmail} already registered with team: ${teamId}`);
        }
        const participant = yield prisma.participant.create({
            data: {
                teamId: teamId,
                participantEmail: participantEmail,
            },
        });
        res.json(participant);
    }
    catch (error) {
        res.status(500).send(`Error registering user ${participantEmail} with team ${teamId} \nerror: ${error}`);
    }
}));
router.get("/api/allParticipants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participants = yield prisma.participant.findMany();
        res.json(participants);
    }
    catch (error) {
        res.status(500).send(`Error fetching participants: ${error}`);
    }
}));
router.get("/api/participant/eventId/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const participantEmail = req.params.email;
    try {
        const participants = yield prisma.participant.findMany({
            where: { participantEmail: participantEmail },
            select: { eventId: true },
        });
        const eventIdArray = participants.map((participant) => participant.eventId);
        res.json(eventIdArray);
    }
    catch (error) {
        res.status(500).send(`Error fetching participants: ${error}`);
    }
}));
router.get("/api/participant/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const participantEmail = req.params.email;
    try {
        const participants = yield prisma.participant.findMany({
            where: { participantEmail: participantEmail },
        });
        const totalParticipation = yield prisma.participant.count({
            where: { participantEmail: participantEmail },
        });
        res.json({ totalParticipation, participants });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants: ${error}`);
    }
}));
router.get("/api/participants/count/perEvent/:eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    try {
        const participants = yield prisma.participant.findMany({
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
            }
            else {
                outsiderUser.push(element.participantEmail);
            }
        });
        let insiderCount = insiderUser.length;
        let outsiderCount = outsiderUser.length;
        let totalCount = insiderUser.length + outsiderUser.length;
        res.status(201).json({ insiderCount, outsiderCount, totalCount });
    }
    catch (error) {
        res.status(500).send(`Error fetching registered teams: ${error}`);
    }
}));
router.get("/api/allOutSiderParticipants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participants = yield prisma.participant.findMany();
        const leaderDetailsPromises = participants.map((element) => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield prisma.user.findUnique({
                where: { userEmail: element.participantEmail },
            });
            return data;
        }));
        const leaderDetails = yield Promise.all(leaderDetailsPromises);
        const outsidersLeaders = leaderDetails.filter((user) => user && !user.isUserOPJUStudent);
        const outSiderCount = outsidersLeaders.length;
        res.json({ outSiderCount, outsidersLeaders });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/allOutSiderParticipants/eventId/teamId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participants = yield prisma.participant.findMany();
        let insiderUser = [];
        let outsiderUser = [];
        participants.forEach((element) => {
            // Extract the email domain from the participant's email address
            const emailDomain = element.participantEmail.split("@")[1];
            // Check if the email domain is 'opju.ac.in'
            if (emailDomain === "opju.ac.in") {
                insiderUser.push(element);
            }
            else {
                outsiderUser.push(element);
            }
        });
        let outsideCount = outsiderUser.length;
        res.status(201).json({ outsideCount, outsiderUser });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/allInSiderParticipants/eventId/teamId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participants = yield prisma.participant.findMany();
        let insiderUser = [];
        let outsiderUser = [];
        participants.forEach((element) => {
            // Extract the email domain from the participant's email address
            const emailDomain = element.participantEmail.split("@")[1];
            // Check if the email domain is 'opju.ac.in'
            if (emailDomain === "opju.ac.in") {
                insiderUser.push(element);
            }
            else {
                outsiderUser.push(element);
            }
        });
        let insideCount = insiderUser.length;
        res.status(201).json({ insideCount, insiderUser });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
module.exports = router;
