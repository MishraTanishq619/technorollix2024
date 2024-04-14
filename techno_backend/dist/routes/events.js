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
// Events
router.post("/api/create/event", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mainEventId, eventName, eventDescription, eventpic, teamSize, priceMoney, entryFee, } = req.body;
        const eventId = generateEventId(eventName, "event"); // Assuming generateEventId is defined elsewhere
        const newEvent = yield prisma.event.create({
            data: {
                eventId: eventId,
                mainEventId: mainEventId,
                eventName: eventName,
                eventDescription: eventDescription,
                eventpic: eventpic,
                teamSize: teamSize,
                priceMoney: priceMoney,
                entryFee: entryFee,
            },
        });
        res.status(201).json(newEvent);
    }
    catch (error) {
        console.error("Error creating event:", error);
        res.status(500).send(`Error creating event: ${error}`);
    }
}));
router.put("/api/update/event/byEventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mainEventId, eventId, eventName, eventDescription, eventpic, teamSize, priceMoney, entryFee, } = req.body;
        const existingEvent = yield prisma.event.findUnique({
            where: {
                eventId: eventId,
            },
        });
        if (existingEvent) {
            const updatedEvent = yield prisma.event.update({
                where: {
                    eventId: eventId,
                },
                data: {
                    mainEventId: mainEventId,
                    eventName: eventName,
                    eventDescription: eventDescription,
                    eventpic: eventpic,
                    teamSize: teamSize,
                    priceMoney: priceMoney,
                    entryFee: entryFee,
                },
            });
            return res
                .status(409)
                .json(`Updated ${existingEvent.eventName}`);
        }
        else {
            return res.status(404).json(`Invalid Event Id`);
        }
    }
    catch (error) {
        console.error("Error updating event:", error);
        res.status(500).send(`Error updating event: ${error}`);
    }
}));
router.get("/api/allEvents", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield prisma.event.findMany({
            where: {
                teamSize: {
                    not: 0,
                },
            },
        });
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching all events:", error);
        res.status(500).send(`Error fetching all events: ${error}`);
    }
}));
router.get("/api/allMainEvents", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield prisma.event.findMany({
            where: {
                mainEventId: "Technorollix2k24",
            },
        });
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching all main events:", error);
        res.status(500).send(`Error fetching all main events: ${error}`);
    }
}));
router.get("/api/allSubEvents/:eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    try {
        const events = yield prisma.event.findMany({
            where: {
                mainEventId: eventId,
            },
        });
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching all sub events:", error);
        res.status(500).send(`Error fetching all sub events: ${error}`);
    }
}));
router.post("/api/allSubEvents/eventIdArray/byMainIdArray", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mainEventsArray } = req.body;
        console.log(mainEventsArray);
        // Validate mainEventsArray
        if (!Array.isArray(mainEventsArray)) {
            return res
                .status(400)
                .json({ error: "eventId must be an array" });
        }
        let response = [];
        // Use for...of loop for sequential execution
        for (const mainEventId of mainEventsArray) {
            const subEvents = yield prisma.event.findMany({
                where: {
                    mainEventId: mainEventId,
                },
            });
            // Extract subEventIds from subEvents
            const subEventsId = subEvents.map((element) => element.eventId);
            response.push(subEvents);
        }
        res.json(response);
    }
    catch (error) {
        console.error("Error fetching all sub events by main event ids:", error);
        res.status(500).send(`Error fetching all sub events by main event ids: ${error.message}`);
    }
}));
router.get("/api/allEvents/technorollix", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield prisma.event.findMany();
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching all events:", error);
        res.status(500).send(`Error fetching all events: ${error}`);
    }
}));
router.get("/api/byEventId/:eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    try {
        const events = yield prisma.event.findMany({
            where: {
                eventId: eventId,
            },
        });
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching event by id:", error);
        res.status(500).send(`Error fetching event by id: ${error}`);
    }
}));
router.get("/api/eventName/byEventId/:eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    try {
        const event = yield prisma.event.findUnique({
            where: {
                eventId: eventId,
            },
        });
        if (!event) {
            return res
                .status(404)
                .json(`Event not found: eventId: ${eventId}`);
        }
        res.json(event.eventName);
    }
    catch (error) {
        console.error("Error fetching event name by id:", error);
        res.status(500).send(`Error fetching event name by id: ${error}`);
    }
}));
router.post("/api/byArrayEventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventIdArr } = req.body;
    try {
        const events = yield prisma.event.findMany({
            where: {
                eventId: {
                    in: eventIdArr,
                },
            },
        });
        res.json(events);
    }
    catch (error) {
        console.error("Error fetching events by array of ids:", error);
        res.status(500).send(`Error fetching events by array of ids: ${error}`);
    }
}));
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
