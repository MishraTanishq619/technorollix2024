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

router.post(
	"/api/payment/gateway/receipt",
	async (req: Request, res: Response) => {
		console.log("enter");
		try {
			const { userEmail, paymentId, numberOfEvents, paidEntryFee } =
				req.body;
			console.log(`userEmail ${userEmail}`);
			console.log(`paymentId ${paymentId}`);
			console.log(`numberOfEvents ${numberOfEvents}`);
			console.log(`paidEntryFee ${paidEntryFee}`);

			const existingReceipt = await prisma.paymentReceipt.findFirst({
				where: { paymentId: paymentId },
			});
			if (existingReceipt) {
				return res
					.status(409)
					.json(`Already exists: ${existingReceipt}`);
			}
			const receipt = await prisma.paymentReceipt.create({
				data: {
					userEmail: userEmail,
					paymentId: paymentId,
					numberOfEvents: numberOfEvents,
					paidEntryFee: paidEntryFee,
				},
			});
			res.status(201).json(receipt);
		} catch (error: any) {
			console.log(error);
			res.status(500).json(`Error occurred: ${error.message}`);
		}
	}
);

router.get(
	"/api/payment/gateway/receipt/details",
	async (req: Request, res: Response) => {
		console.log("enter");
		try {
			const { paymentId } = req.query;
			const existingReceipt = await prisma.paymentReceipt.findFirst({
				where: { paymentId: paymentId as string },
			});
			res.status(201).json(`Data ${existingReceipt}`);
		} catch (error: any) {
			console.log(error);
			res.status(500).json(`Error occurred: ${error.message}`);

			router.post(
				"/api/payment/gateway/receipt",
				async (req: Request, res: Response) => {
					console.log("enter");
					try {
						const {
							userEmail,
							paymentId,
							numberOfEvents,
							paidEntryFee,
						} = req.body;
						console.log(`userEmail ${userEmail}`);
						console.log(`paymentId ${paymentId}`);
						console.log(`numberOfEvents ${numberOfEvents}`);
						console.log(`paidEntryFee ${paidEntryFee}`);

						const existingReceipt =
							await prisma.paymentReceipt.findFirst({
								where: { paymentId: paymentId },
							});
						if (existingReceipt) {
							return res
								.status(409)
								.json(`Already exists: ${existingReceipt}`);
						}
						const receipt = await prisma.paymentReceipt.create({
							data: {
								userEmail: userEmail,
								paymentId: paymentId,
								numberOfEvents: numberOfEvents,
								paidEntryFee: paidEntryFee,
							},
						});
						res.status(201).json(receipt);
					} catch (error: any) {
						console.log(error);
						res.status(500).json(
							`Error occurred: ${error.message}`
						);
					}
				}
			);

			router.get(
				"/api/payment/gateway/receipt/details",
				async (req: Request, res: Response) => {
					console.log("enter");
					try {
						const { paymentId } = req.query;
						const existingReceipt =
							await prisma.paymentReceipt.findFirst({
								where: { paymentId: paymentId as string },
							});
						res.status(201).json(`Data ${existingReceipt}`);
					} catch (error: any) {
						console.log(error);
						res.status(500).json(
							`Error occurred: ${error.message}`
						);
					}
				}
			);

			router.get(
				"/api/payment/allreceipt/gateway/details",
				async (req: Request, res: Response) => {
					console.log("enter");
					try {
						const existingReceipts =
							await prisma.paymentReceipt.findMany();
						res.status(201).json({ existingReceipts });
					} catch (error: any) {
						console.log(error);
						res.status(500).json(
							`Error occurred: ${error.message}`
						);
					}
				}
			);
		}
	}
);

router.get(
	"/api/payment/allreceipt/gateway/details",
	async (req: Request, res: Response) => {
		console.log("enter");
		try {
			const existingReceipts = await prisma.paymentReceipt.findMany();
			res.status(201).json({ existingReceipts });
		} catch (error: any) {
			console.log(error);
			res.status(500).json(`Error occurred: ${error.message}`);
		}
	}
);

module.exports = router;
