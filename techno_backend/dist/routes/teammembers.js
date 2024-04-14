"use strict";
// import mailer from "../nodeMails/mailer";
// import thankMailer from "../nodeMails/thankMailer";
// import otpEmail from "../nodeMails/otpMailer";
// import registeredEventMailer from "../nodeMails/registeredMailer";
// import xlsx from "xlsx";
// import fs from "fs";
// import path from "path";
// import os from "os";
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
//Team-members
router.get("/api/participant/teamMembers/:teamId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teamId = req.params.teamId;
    try {
        const participants = yield prisma.participant.findMany({
            where: {
                teamId: teamId,
            },
        });
        res.json(participants);
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/myParticipations/allTeam/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    try {
        const participants = yield prisma.participant.findMany({
            where: {
                participantEmail: email,
            },
        });
        const rawResult = yield Promise.all(participants.map((p) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            const eventDetails = yield prisma.event.findUnique({
                where: { eventId: (_a = p.eventId) === null || _a === void 0 ? void 0 : _a.toString() },
            });
            let leader = p.teamId.split(`team_${eventDetails === null || eventDetails === void 0 ? void 0 : eventDetails.eventName}_`)[1];
            const teamDetails = yield prisma.participant.findMany({
                where: { teamId: p.teamId },
            });
            const rawTeamMembers = yield Promise.all(teamDetails.map((t) => __awaiter(void 0, void 0, void 0, function* () {
                const userDetails = yield prisma.user.findUnique({
                    where: { userEmail: t.participantEmail },
                });
                if (t.participantEmail === leader) {
                    leader = (userDetails === null || userDetails === void 0 ? void 0 : userDetails.userName)
                        ? userDetails.userName
                        : null;
                    return null;
                }
                else {
                    return userDetails === null || userDetails === void 0 ? void 0 : userDetails.userName;
                }
            })));
            const finalMembers = rawTeamMembers.filter((member) => member !== null);
            const items = {
                event: {
                    eventName: eventDetails === null || eventDetails === void 0 ? void 0 : eventDetails.eventName,
                    teamSize: eventDetails === null || eventDetails === void 0 ? void 0 : eventDetails.teamSize,
                },
                leader: leader,
                teamMembers: finalMembers,
            };
            return items;
        })));
        res.status(201).json(rawResult);
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
module.exports = router;
