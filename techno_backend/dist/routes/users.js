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
const thankMailer_1 = __importDefault(require("../nodeMails/thankMailer"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
////////////////////////////////
// Create User
router.post("/api/create/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        // Check if the user already exists
        const existingUser = yield prisma.user.findUnique({
            where: {
                userEmail: user.userEmail,
            },
        });
        if (existingUser) {
            // If the user exists, update their details
            const updatedUser = yield prisma.user.update({
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
        }
        else {
            // If the user doesn't exist, create a new user
            const newUser = yield prisma.user.create({
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
            (0, thankMailer_1.default)(user.userEmail);
            return res.status(201).json(newUser);
        }
    }
    catch (error) {
        console.error("Error creating/updating user:", error);
        return res.status(500).send(`Error creating/updating user: ${error}`);
    }
}));
router.get("/api/allUsers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        const numberOfUsers = users.length;
        res.json({ numberOfUsers, users });
    }
    catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).send(`Error fetching user details: ${error}`);
    }
}));
//
router.get("/api/allOutSiderUsers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany({
            where: {
                isUserOPJUStudent: false,
            },
        });
        const numberOfUsers = users.length;
        res.json({ numberOfUsers, users });
    }
    catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).send(`Error fetching user details: ${error}`);
    }
}));
router.put("/api/update/userDetails", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const isExistingUser = yield prisma.user.findUnique({
            where: {
                userEmail: user.userEmail,
            },
        });
        if (isExistingUser) {
            const existingUser = yield prisma.user.update({
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
        const newUser = yield prisma.user.create({
            data: user,
        });
        return res.status(201).json(newUser);
    }
    catch (error) {
        console.error("Error creating/updating user:", error);
        res.status(500).send(`Error creating/updating user: ${error}`);
    }
}));
router.get("/api/user/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.params.email;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                userEmail: userEmail,
            },
        });
        if (!user) {
            return res.status(404).json(`User not found: email: ${userEmail}`);
        }
        else
            return res.status(200).json(user);
    }
    catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).send(`Error fetching user details: ${error}`);
    }
}));
router.get("/api/user/universityVerification/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.params.email;
    try {
        const user = yield prisma.user.findUnique({
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
    }
    catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).send(`Error fetching user details: ${error}`);
    }
}));
router.get("/api/user/name/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = req.params.email;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                userEmail: userEmail,
            },
        });
        if (!user) {
            return res.status(404).json(`User not found: email: ${userEmail}`);
        }
        const name = user.userName;
        return res.status(200).json(name);
    }
    catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).send(`Error fetching user details: ${error}`);
    }
}));
//
module.exports = router;
