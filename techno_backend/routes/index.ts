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

// var usersRoutes = require("./users");
// var deletesRoutes = require("./deletes");
// var eventsRoutes = require("./events");
// var invitationRoutes = require("./invitation");
// var participantsRoutes = require("./participants");
// var paymentsRoutes = require("./payments");
// var teamMembersRoutes = require("./teammembers");
// var teamRegistrationRoutes = require("./teamregistration");

// [
// 	usersRoutes,
// 	deletesRoutes,
// 	eventsRoutes,
// 	invitationRoutes,
// 	participantsRoutes,
// 	paymentsRoutes,
// 	teamMembersRoutes,
// 	teamRegistrationRoutes,
// ].forEach((routes) => {
// 	router.use("/", routes);
// });

////////////////////////////////

// Impressions

let visitCount = 0;
// Middleware to increment the visit count on each request to the home page
router.use("/", (req: Request, res: Response, next: NextFunction) => {
	++visitCount;
	next();
});

// Endpoint to get the current visit count
router.get("/api/visitCount", (req: Request, res: Response) => {
	res.json({ visitCount });
});

// Test

router.get("/", (req: Request, res: Response) => {
	console.log("hiiiii");
	res.json({
		msg: "hi there",
	});
});

// OtpVerification

router.post("/api/email/verify/otp", async (req: Request, res: Response) => {
	console.log("first");
	try {
		const { user, number } = req.body;
		otpEmail(user, number);
		console.log(`called user= ${user} \n otp= ${number}`);
		res.status(201).json(`success`);
	} catch (error) {
		console.log(error);
		res.status(500).json(`error hai`);
	}
});

module.exports = router;
