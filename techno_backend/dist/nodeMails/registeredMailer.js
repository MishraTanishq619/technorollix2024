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
function makeEventMessage(leader, eventIdArr) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const events = yield prisma.event.findMany();
            const user = yield prisma.user.findUnique({
                where: {
                    userEmail: leader,
                },
            });
            if (!user) {
                throw new Error("User not found");
            }
            const reqEvents = events.filter((e) => eventIdArr.includes(e.eventId));
            console.log(events);
            console.log("Filtered events:", reqEvents); // Log filtered events to check if data is correct
            let eventsHtml = "";
            reqEvents.forEach((event) => {
                eventsHtml += `
                <div style="background-color: #333; color: #fff; padding: 20px; margin-bottom: 20px;">
                    <h2 style="font-size: 20px; font-weight: bold;">Event Name: ${event.eventName}</h2><br/><p>${event.eventDescription}</p>
                </div>
            `;
            });
            let accommodationLink = "";
            if (!user.isUserOPJUStudent) {
                accommodationLink = `
                <div style="background-color: #333; color: #fff; padding: 20px; margin-bottom: 20px;">
                    <p>If you need accommodation then kindly fill the accommodation form</p><br/>
                    <h2><a href="https://docs.google.com/forms/d/e/1FAIpQLSczoPzhwQMTQ-ZPzPB1GYGQvIoR8N5yi1_ADyFdj2xyNZfIAQ/viewform?usp=sf_link">Accommodation Form</a></h2><br/>
                    <p style="color:red;">Note:- We provide one way fare for Tech Lab Participants </p>
                </div>
            `;
            }
            const message = {
                from: '"TechnoRollix 2k24"',
                to: leader,
                subject: `Confirmation `,
                html: `<div style="text-align: center;">
                <h1 style="font-size: 36px;">May the Force Be With You, ${user.userName}</h1>
                <p style="font-size: 20px;">You have successfully registered for the following events:</p>
                ${eventsHtml}
                ${accommodationLink}
                <p style="font-size: 20px;">Explore more about TechnoRollix at <a href="http://technorollix_Backend" style="color: #ffffff;">technorollix_Backend</a></p>
                <h3 style="font-size: 24px;">Thank you and may the Force be with you!</h3>
            </div>`,
            };
            return message;
        }
        catch (error) {
            console.error("Error in makeEventMessage:", error);
            return "error";
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
// async..await is not allowed in global scope, must use a wrapper
function registeredEventMailer(leader, eventIdArr) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // send mail with defined transport object
            let message = yield makeEventMessage(leader, eventIdArr);
            const info = yield transporter.sendMail(message);
            console.log("Message sent: %s", info.messageId);
            return info;
        }
        catch (error) {
            console.log(error);
            return "Error Occured";
        }
    });
}
exports.default = registeredEventMailer;
