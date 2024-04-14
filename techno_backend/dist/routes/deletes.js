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
// Delete APIs
router.delete("/api/delete/event/ekKhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventId } = req.body;
        const deletedEvent = yield prisma.event.delete({
            where: { eventId: eventId },
        });
        res.status(200).send(`Event deleted: ${deletedEvent}`);
    }
    catch (error) {
        res.status(500).send(`Error deleting event: ${error.message}`);
    }
}));
router.delete("/api/delete/event/purakhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.event.deleteMany({});
        res.status(200).send(`All events deleted`);
    }
    catch (error) {
        res.status(500).send(`Error deleting events: ${error.message}`);
    }
}));
router.delete("/api/delete/team/purakhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.registeredTeam.deleteMany({});
        res.status(200).send(`All teams deleted`);
    }
    catch (error) {
        res.status(500).send(`Error deleting teams: ${error.message}`);
    }
}));
router.delete("/api/delete/team/ekKhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teamId } = req.body;
        const deletedTeam = yield prisma.registeredTeam.delete({
            where: { teamId: teamId },
        });
        res.status(200).send(`Team deleted: ${deletedTeam}`);
    }
    catch (error) {
        res.status(500).send(`Error deleting team: ${error.message}`);
    }
}));
router.delete("/api/delete/user/purakhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.user.deleteMany({});
        res.status(200).send(`All users deleted`);
    }
    catch (error) {
        res.status(500).send(`Error deleting users: ${error.message}`);
    }
}));
router.delete("/api/delete/user/ekKhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userEmail } = req.body;
        const deletedUser = yield prisma.user.delete({
            where: { userEmail: userEmail },
        });
        res.status(200).send(`User deleted: ${deletedUser}`);
    }
    catch (error) {
        res.status(500).send(`Error deleting user: ${error.message}`);
    }
}));
router.delete("/api/delete/invitation/purakhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.invitation.deleteMany({});
        res.status(200).send(`All invitations deleted`);
    }
    catch (error) {
        res.status(500).send(`Error deleting invitations: ${error.message}`);
    }
}));
router.delete("/api/delete/participants/purakhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.participant.deleteMany({});
        res.status(200).send(`All participants deleted`);
    }
    catch (error) {
        res.status(500).send(`Error deleting participants: ${error.message}`);
    }
}));
router.delete("/api/delete/participant/ekKhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventId, teamId, participantEmail } = req.body;
        const deletedParticipant = yield prisma.participant.deleteMany({
            where: {
                eventId,
                teamId,
                participantEmail,
            },
        });
        res.status(200).send(`Participant deleted: ${deletedParticipant}`);
    }
    catch (error) {
        res.status(500).send(`Error deleting participant: ${error.message}`);
    }
}));
router.delete("/api/delete/receipt/ekKhatam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userEmail, paymentId, } = req.body;
        const deletedReceipt = yield prisma.paymentReceipt.deleteMany({
            where: { userEmail: userEmail, paymentId: paymentId },
        });
        res.status(200).send(`Receipt deleted: ${deletedReceipt}`);
    }
    catch (error) {
        res.status(500).send(`Error deleting receipt: ${error.message}`);
    }
}));
router.delete("/api/delete/invitation/bySender/invitationId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { invitationId } = req.body;
    try {
        const invitation = yield prisma.invitation.findFirst({
            where: { invitationId: invitationId },
            // include: { participants: true },
        });
        if (invitation) {
            yield prisma.invitation.delete({
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
        }
        else {
            return res.status(404).json(`Invitation not found`);
        }
    }
    catch (error) {
        res.status(500).send(`Error deleting invitation: ${error.message}`);
    }
}));
module.exports = router;
