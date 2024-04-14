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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        // from google smtp ,
        user: "mishratanishq619@gmail.com",
        pass: "hhxh goar pmre jwns ", // from app passkeys
    },
});
function makeMessage(recieversList, teamId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const invitations = yield prisma.invitation.findMany({
                where: {
                    teamId: teamId,
                    inviteeEmail: {
                        in: recieversList,
                    },
                },
            });
            const eventIds = invitations.map((invitation) => invitation.eventId);
            const userIds = invitations.map((invitation) => invitation.inviterEmail);
            let events = [];
            let users = [];
            if (eventIds.length > 0) {
                events = yield prisma.event.findMany({
                    where: {
                        eventId: {
                            in: eventIds,
                        },
                    },
                });
            }
            if (userIds.length > 0) {
                users = yield prisma.user.findMany({
                    where: {
                        userEmail: {
                            in: userIds,
                        },
                    },
                });
            }
            const messages = invitations.map((invitation) => {
                const event = events.find((event) => event.eventId === invitation.eventId);
                const user = users.find((user) => user.userEmail === invitation.inviterEmail);
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
        }
        catch (error) {
            console.error("Error in makeMessage:", error);
            return "error";
        }
    });
}
// async..await is not allowed in global scope, must use a wrapper
function mailer(listOfRecievers, teamId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // send mail with defined transport object
            let message = yield makeMessage(listOfRecievers, teamId);
            const info = yield transporter.sendMail(message);
            console.log("Message sent: %s", info.messageId);
            return info;
        }
        catch (error) {
            console.log(error);
            return "Error Occurred";
        }
    });
}
exports.default = mailer;
