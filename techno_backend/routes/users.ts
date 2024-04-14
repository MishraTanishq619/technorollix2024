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

// Create User
router.post("/api/create/user", async (req: Request, res: Response) => {
	try {
		const user = req.body;

		// Check if the user already exists
		const existingUser = await prisma.user.findUnique({
			where: {
				userEmail: user.userEmail,
			},
		});

		if (existingUser) {
			// If the user exists, update their details
			const updatedUser = await prisma.user.update({
				where: {
					userEmail: user.userEmail,
				},
				data: {
					userEmail: user.userEmail,
					userName: user.userName,
					userPic: user.userPic,
					userPhoneNumber: user.userPhoneNumber,
					userUniversity: user.userUniversity,
					isUserOPJUStudent: user.isUserOPJUStudent,
					userAddress: {
						create: {
							district: user.userAddress.district,
							state: user.userAddress.state,
							pincode: parseInt(user.userAddress.pincode),
						},
					},
					userGender: user.userGender,
				},
			});

			return res
				.status(205)
				.json(`Updated details ${JSON.stringify(user)}`);
		} else {
			// If the user doesn't exist, create a new user
			const newUser = await prisma.user.create({
				data: {
					userEmail: user.userEmail,
					userName: user.userName,
					userPic: user.userPic,
					userPhoneNumber: user.userPhoneNumber,
					userUniversity: user.userUniversity,
					isUserOPJUStudent: user.isUserOPJUStudent,
					userAddress: {
						create: {
							district: user.userAddress.district,
							state: user.userAddress.state,
							pincode: parseInt(user.userAddress.pincode),
						},
					},
					userGender: user.userGender,
				},
			});

			// Send thank you email
			thankMailer(user.userEmail);

			return res.status(201).json(newUser);
		}
	} catch (error) {
		console.error("Error creating/updating user:", error);
		return res.status(500).send(`Error creating/updating user: ${error}`);
	}
});

router.get("/api/allUsers", async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();
		const numberOfUsers = users.length;
		res.json({ numberOfUsers, users });
	} catch (error) {
		console.error("Error fetching user details:", error);
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});

//
router.get("/api/allOutSiderUsers", async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany({
			where: {
				isUserOPJUStudent: false,
			},
		});
		const numberOfUsers = users.length;
		res.json({ numberOfUsers, users });
	} catch (error) {
		console.error("Error fetching user details:", error);
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});

router.put("/api/update/userDetails", async (req: Request, res: Response) => {
	try {
		const user = req.body;
		const isExistingUser = await prisma.user.findUnique({
			where: {
				userEmail: user.userEmail,
			},
		});
		if (isExistingUser) {
			const existingUser = await prisma.user.update({
				where: {
					userEmail: user.userEmail,
				},
				data: user,
			});
			return res
				.status(205)
				.json(`Updated details ${JSON.stringify(user)}`);
		}
		// thankMailer(user.userEmail); // Assuming this function is defined elsewhere
		const newUser = await prisma.user.create({
			data: user,
		});
		return res.status(201).json(newUser);
	} catch (error) {
		console.error("Error creating/updating user:", error);
		res.status(500).send(`Error creating/updating user: ${error}`);
	}
});

router.get("/api/user/:email", async (req: Request, res: Response) => {
	const userEmail = req.params.email;
	try {
		const user = await prisma.user.findUnique({
			where: {
				userEmail: userEmail,
			},
		});
		if (!user) {
			return res.status(404).json(`User not found: email: ${userEmail}`);
		} else return res.status(200).json(user);
	} catch (error) {
		console.error("Error fetching user details:", error);
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});

router.get(
	"/api/user/universityVerification/:email",
	async (req: Request, res: Response) => {
		const userEmail = req.params.email;
		try {
			const user = await prisma.user.findUnique({
				where: {
					userEmail: userEmail,
				},
			});
			if (!user) {
				return res
					.status(404)
					.json(`User not found: email: ${userEmail}`);
			}
			const bool = user.isUserOPJUStudent;
			return res.status(200).json(bool);
		} catch (error) {
			console.error("Error fetching user details:", error);
			res.status(500).send(`Error fetching user details: ${error}`);
		}
	}
);

router.get("/api/user/name/:email", async (req: Request, res: Response) => {
	const userEmail = req.params.email;
	try {
		const user = await prisma.user.findUnique({
			where: {
				userEmail: userEmail,
			},
		});
		if (!user) {
			return res.status(404).json(`User not found: email: ${userEmail}`);
		}
		const name = user.userName;
		return res.status(200).json(name);
	} catch (error) {
		console.error("Error fetching user details:", error);
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});

//

module.exports = router;
