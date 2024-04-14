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
const mailer_1 = __importDefault(require("../nodeMails/mailer"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
////////////////////////////////
// Invitation
router.post("/api/create/team-invite", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { teamId, inviterEmail, inviteeEmail } = req.body;
    console.log(teamId);
    console.log(inviterEmail);
    console.log(inviteeEmail);
    try {
        const team = yield prisma.registeredTeam.findUnique({
            where: { teamId: teamId },
        });
        if (!team) {
            return res
                .status(404)
                .send(`Team is not registered: Team-id: ${teamId}`);
        }
        const user = yield prisma.user.findUnique({
            where: { userEmail: inviterEmail },
        });
        if (!user) {
            return res
                .status(404)
                .send(`User is not registered: Email: ${inviterEmail}`);
        }
        const event = yield prisma.event.findUnique({
            where: { eventId: team.eventId },
        });
        if (team.leader !== user.userEmail || (event && event.teamSize < 2)) {
            return res.status(409).json({
                error: `Error1 Inviting user ${inviteeEmail} with team ${teamId} by leader ${inviterEmail} \nerror: ${Error}`,
            });
        }
        const totalInvitation = yield prisma.invitation.count({
            where: {
                inviterEmail: inviterEmail,
                teamId: teamId,
                status: { not: "rejected" },
            },
        });
        const isInvited = yield prisma.invitation.findFirst({
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
                    .json(`User: ${inviteeEmail} already invited to join team: ${teamId}`);
            }
            else if (isInvited.status === "rejected") {
                return res
                    .status(411)
                    .json(`User: ${inviteeEmail} have rejected invitation to join team: ${teamId}`);
            }
            else {
                return res
                    .status(412)
                    .json(`User: ${inviteeEmail} has joined different team`);
            }
        }
        const hasJoined = yield prisma.participant.findFirst({
            where: {
                eventId: team.eventId,
                participantEmail: inviteeEmail,
            },
        });
        if (hasJoined) {
            return res
                .status(413)
                .json(`User: ${inviteeEmail} has joined different team for ${team.eventId}`);
        }
        if (totalInvitation < (event ? event.teamSize : 1) - 1) {
            const invitationId = generateInvitationId(teamId, inviteeEmail); // Define the function to generate invitationId
            const invitation = yield prisma.invitation.create({
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
            const sendMail = yield (0, mailer_1.default)([invitation.inviteeEmail], teamId);
            res.status(201).json(invitation);
        }
        else {
            return res.status(414).send(`Error3 Limit cross`);
        }
    }
    catch (error) {
        res.status(500).send(`Error2 Inviting user ${inviteeEmail} with team ${teamId} by leader ${inviterEmail} \nerror: ${error}`);
    }
}));
router.put("/api/update/team-invite", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { teamId, inviterEmail, inviteeEmail, response } = req.body;
    try {
        const acceptedInvite = yield prisma.invitation.updateMany({
            where: {
                teamId,
                inviteeEmail,
                status: "pending",
            },
            data: {
                status: response === "accept" ? "accepted" : "rejected",
            },
        });
        const invitation = yield prisma.registeredTeam.findUnique({
            where: { teamId: teamId },
        });
        // If accepted, decline other invitations for the same event
        if (response === "accept") {
            yield prisma.invitation.updateMany({
                where: {
                    eventId: invitation === null || invitation === void 0 ? void 0 : invitation.eventId,
                    inviteeEmail: inviteeEmail,
                    status: { not: "accepted" },
                },
                data: { status: "rejected" },
            });
            const registered = yield prisma.participant.create({
                data: {
                    eventId: invitation ? invitation.eventId : "",
                    teamId: teamId,
                    participantEmail: inviteeEmail,
                },
            });
            return res.status(200).json({
                result: `Invitation accepted: ${invitation === null || invitation === void 0 ? void 0 : invitation.eventId}`,
                registered,
            });
        }
        else {
            return res.status(404).send("rejected");
        }
    }
    catch (error) {
        res.status(500).send(`Error responding user ${inviterEmail} invitation for ${teamId}\nerror: ${error}`);
    }
}));
router.put("/api/restore/team-invite", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allInvitations = yield prisma.invitation.findMany();
        const waiting = allInvitations.map((i) => __awaiter(void 0, void 0, void 0, function* () {
            const participation = yield prisma.participant.findFirst({
                where: {
                    teamId: i.teamId,
                    participantEmail: i.inviteeEmail,
                },
            });
            if (participation !== null) {
                const acceptedInvite = yield prisma.invitation.updateMany({
                    where: {
                        teamId: i.teamId,
                        inviteeEmail: i.inviteeEmail,
                        inviterEmail: i.inviterEmail,
                    },
                    data: { status: "accepted" },
                });
                return acceptedInvite;
            }
            else {
                const pendingInvite = yield prisma.invitation.updateMany({
                    where: {
                        teamId: i.teamId,
                        inviteeEmail: i.inviteeEmail,
                        inviterEmail: i.inviterEmail,
                    },
                    data: { status: "rejected" },
                });
                return pendingInvite;
            }
        }));
        const result = yield Promise.all(waiting);
        // return res.status(201).json({ total: result.length, result: result });
    }
    catch (error) {
        res.status(500).send(`Error responding user invitation\nerror: ${error}`);
    }
}));
router.delete("/api/delete/team/invite", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { teamId, inviterEmail, inviteeEmail } = req.body;
    try {
        console.log("deleting");
        console.log(teamId);
        console.log(inviterEmail);
        console.log(inviteeEmail);
        yield prisma.invitation.deleteMany({
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
    }
    catch (error) {
        res.status(500).send(`Error responding user invitation\nerror: ${error}`);
    }
}));
router.get("/api/event/invitations/email/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.params.email;
    try {
        const invitation = yield prisma.invitation.findMany({
            where: {
                inviteeEmail: request,
                status: "pending",
            },
        });
        const totalInvitation = yield prisma.invitation.count({
            where: {
                inviteeEmail: request,
                status: "pending",
            },
        });
        res.json({ totalInvitation, invitation });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/eventName/inviterName/invitations/email/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.params.email;
    try {
        const rawInvitations = yield prisma.invitation.findMany({
            where: {
                inviteeEmail: request,
                status: "pending",
            },
        });
        const eventDetailsPromises = rawInvitations.map((element) => __awaiter(void 0, void 0, void 0, function* () {
            const [event, inviter] = yield Promise.all([
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
                eventName: event === null || event === void 0 ? void 0 : event.eventName,
                teamId: element.teamId,
                inviterName: inviter === null || inviter === void 0 ? void 0 : inviter.userName,
                inviteeEmail: element.inviteeEmail,
            };
            return invites;
        }));
        const invitation = yield Promise.all(eventDetailsPromises);
        const totalInvitation = yield prisma.invitation.count({
            where: {
                inviteeEmail: request,
                status: "pending",
            },
        });
        res.json({ totalInvitation, invitation });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/event/invitations/inviteId/:invitationId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.params.invitationId;
    try {
        const invitation = yield prisma.invitation.findMany({
            where: {
                invitationId: request,
            },
        });
        const totalInvitation = yield prisma.invitation.count({
            where: {
                invitationId: request,
            },
        });
        res.json(invitation);
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/event/invite/status/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.params.email;
    try {
        const invitation = yield prisma.invitation.findMany({
            where: {
                inviterEmail: request,
            },
        });
        const totalInvitation = yield prisma.invitation.count({
            where: {
                inviterEmail: request,
            },
        });
        res.json({ totalInvitation, invitation });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.post("/api/event/invite/status/byInviter/teamId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { inviterEmail, teamId } = req.body;
    try {
        const invitation = yield prisma.invitation.findMany({
            where: {
                inviterEmail: inviterEmail,
                teamId: teamId,
            },
        });
        const totalInvitation = yield prisma.invitation.count({
            where: {
                inviterEmail: inviterEmail,
                teamId: teamId,
            },
        });
        res.json({ totalInvitation, invitation });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.post("/api/event/invite/status/byInviter/eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { inviterEmail, eventId } = req.body;
    try {
        const invitation = yield prisma.invitation.findMany({
            where: {
                inviterEmail: inviterEmail,
                eventId: eventId,
            },
        });
        const totalInvitation = yield prisma.invitation.count({
            where: {
                inviterEmail: inviterEmail,
                eventId: eventId,
            },
        });
        res.json({ totalInvitation, invitation });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/event/allInvites", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invitation = yield prisma.invitation.findMany();
        const totalInvitation = yield prisma.invitation.count();
        res.json({ totalInvitation, invitation });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
// Functions
function generateEventId(eventName, type) {
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
function generateTeamId(eventName, leader) {
    const eventChars = eventName.slice(0, 5);
    const teamId = `team_${eventChars}_${leader}`;
    return teamId;
}
function generateInvitationId(teamId, inviteeEmail) {
    const invitationId = `invite_${teamId}_${inviteeEmail}`;
    return invitationId;
}
module.exports = router;
