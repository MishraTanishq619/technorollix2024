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
router.post("/api/payment/gateway/receipt", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("enter");
    try {
        const { userEmail, paymentId, numberOfEvents, paidEntryFee } = req.body;
        console.log(`userEmail ${userEmail}`);
        console.log(`paymentId ${paymentId}`);
        console.log(`numberOfEvents ${numberOfEvents}`);
        console.log(`paidEntryFee ${paidEntryFee}`);
        const existingReceipt = yield prisma.paymentReceipt.findFirst({
            where: { paymentId: paymentId },
        });
        if (existingReceipt) {
            return res
                .status(409)
                .json(`Already exists: ${existingReceipt}`);
        }
        const receipt = yield prisma.paymentReceipt.create({
            data: {
                userEmail: userEmail,
                paymentId: paymentId,
                numberOfEvents: numberOfEvents,
                paidEntryFee: paidEntryFee,
            },
        });
        res.status(201).json(receipt);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Error occurred: ${error.message}`);
    }
}));
router.get("/api/payment/gateway/receipt/details", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("enter");
    try {
        const { paymentId } = req.query;
        const existingReceipt = yield prisma.paymentReceipt.findFirst({
            where: { paymentId: paymentId },
        });
        res.status(201).json(`Data ${existingReceipt}`);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Error occurred: ${error.message}`);
        router.post("/api/payment/gateway/receipt", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("enter");
            try {
                const { userEmail, paymentId, numberOfEvents, paidEntryFee, } = req.body;
                console.log(`userEmail ${userEmail}`);
                console.log(`paymentId ${paymentId}`);
                console.log(`numberOfEvents ${numberOfEvents}`);
                console.log(`paidEntryFee ${paidEntryFee}`);
                const existingReceipt = yield prisma.paymentReceipt.findFirst({
                    where: { paymentId: paymentId },
                });
                if (existingReceipt) {
                    return res
                        .status(409)
                        .json(`Already exists: ${existingReceipt}`);
                }
                const receipt = yield prisma.paymentReceipt.create({
                    data: {
                        userEmail: userEmail,
                        paymentId: paymentId,
                        numberOfEvents: numberOfEvents,
                        paidEntryFee: paidEntryFee,
                    },
                });
                res.status(201).json(receipt);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(`Error occurred: ${error.message}`);
            }
        }));
        router.get("/api/payment/gateway/receipt/details", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("enter");
            try {
                const { paymentId } = req.query;
                const existingReceipt = yield prisma.paymentReceipt.findFirst({
                    where: { paymentId: paymentId },
                });
                res.status(201).json(`Data ${existingReceipt}`);
            }
            catch (error) {
                console.log(error);
                res.status(500).json(`Error occurred: ${error.message}`);
            }
        }));
        router.get("/api/payment/allreceipt/gateway/details", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("enter");
            try {
                const existingReceipts = yield prisma.paymentReceipt.findMany();
                res.status(201).json({ existingReceipts });
            }
            catch (error) {
                console.log(error);
                res.status(500).json(`Error occurred: ${error.message}`);
            }
        }));
    }
}));
router.get("/api/payment/allreceipt/gateway/details", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("enter");
    try {
        const existingReceipts = yield prisma.paymentReceipt.findMany();
        res.status(201).json({ existingReceipts });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`Error occurred: ${error.message}`);
    }
}));
module.exports = router;
