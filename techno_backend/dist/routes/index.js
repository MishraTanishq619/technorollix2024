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
const otpMailer_1 = __importDefault(require("../nodeMails/otpMailer"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
router.use("/", (req, res, next) => {
    ++visitCount;
    next();
});
// Endpoint to get the current visit count
router.get("/api/visitCount", (req, res) => {
    res.json({ visitCount });
});
// Test
router.get("/", (req, res) => {
    console.log("hiiiii");
    res.json({
        msg: "hi there",
    });
});
// OtpVerification
router.post("/api/email/verify/otp", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("first");
    try {
        const { user, number } = req.body;
        (0, otpMailer_1.default)(user, number);
        console.log(`called user= ${user} \n otp= ${number}`);
        res.status(201).json(`success`);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(`error hai`);
    }
}));
module.exports = router;
