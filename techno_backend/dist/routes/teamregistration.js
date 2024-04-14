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
const registeredMailer_1 = __importDefault(require("../nodeMails/registeredMailer"));
const xlsx_1 = __importDefault(require("xlsx"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
///////////////////
// Team Registration
router.post("/api/team-registration/event", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { eventId, leader, additionalDetails } = req.body;
        if (eventId.length !== additionalDetails.length) {
            return res
                .status(400)
                .send("eventId and additionalDetails array length should be the same");
        }
        const user = yield prisma.user.findUnique({
            where: { userEmail: leader },
        });
        if (!user) {
            return res
                .status(404)
                .send(`User is not registered: Email: ${leader}, Event: ${eventId}`);
        }
        const registrations = [];
        const registeredEventId = [];
        for (let i = 0; i < eventId.length; i++) {
            const event = yield prisma.event.findUnique({
                where: { eventId: eventId[i] },
            });
            if (!event) {
                return res
                    .status(408)
                    .send(`Event is not registered: Email: ${event}`);
            }
            const teamId = generateTeamId(event.eventName, leader);
            const team = yield prisma.registeredTeam.findUnique({
                where: { teamId: teamId },
            });
            if (team) {
                continue;
            }
            const registration = {
                eventId: eventId[i],
                teamId: teamId,
                leader: leader,
                additionalDetails: additionalDetails[i],
            };
            registrations.push(registration);
            yield prisma.invitation.updateMany({
                where: { eventId: eventId[i] },
                data: { status: "rejected" },
            });
            const participant = yield prisma.participant.findUnique({
                where: {
                    eventId_participantEmail: {
                        eventId: event.eventId,
                        participantEmail: leader,
                    },
                },
            });
            if (participant) {
                continue;
            }
            registeredEventId.push(event.eventId);
            yield prisma.participant.create({
                data: {
                    eventId: event.eventId,
                    teamId: teamId,
                    participantEmail: leader,
                },
            });
        }
        if (registrations.length > 0) {
            yield (0, registeredMailer_1.default)(leader, registeredEventId);
        }
        const createdRegistrations = yield prisma.registeredTeam.createMany({
            data: registrations,
        });
        res.status(201).json({
            total_event_registered: registrations.length,
            createdRegistrations,
        });
    }
    catch (error) {
        res.status(500).send(`Error regitring team=> error: ${error}`);
    }
}));
router.get("/api/allTeams", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registeredTeam = yield prisma.registeredTeam.findMany();
        const totalRegisteredTeam = registeredTeam.length;
        res.json({ totalRegisteredTeam, registeredTeam });
    }
    catch (error) {
        res.status(500).send(`Error fetching registered team details : ${error}`);
    }
}));
router.get("/api/allOutSiderTeams", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const participants = yield prisma.registeredTeam.findMany();
        const leaderDetailsPromises = participants.map((element) => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield prisma.user.findUnique({
                where: { userEmail: element.leader },
            });
            return data;
        }));
        const leaderDetails = yield Promise.all(leaderDetailsPromises);
        const outsidersLeaders = leaderDetails.filter((user) => user && !user.isUserOPJUStudent);
        const outSiderCount = outsidersLeaders.length;
        res.json({ outSiderCount, outsidersLeaders });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
router.get("/api/allOutSiderTeams/eventId/teamId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield prisma.registeredTeam.findMany();
        let outsiderUser = teams.filter((element) => {
            const emailDomain = element.leader.split("@")[1];
            return emailDomain !== "opju.ac.in";
        });
        let outsideCount = outsiderUser.length;
        res.status(201).json({ outsideCount, outsiderUser });
    }
    catch (error) {
        res.status(500).send(`Error fetching teams : ${error}`);
    }
}));
router.get("/api/allInSiderTeams/eventId/teamId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teams = yield prisma.registeredTeam.findMany();
        let insiderUser = teams.filter((element) => {
            const emailDomain = element.leader.split("@")[1];
            return emailDomain === "opju.ac.in";
        });
        let insideCount = insiderUser.length;
        res.status(201).json({ insideCount, insiderUser });
    }
    catch (error) {
        res.status(500).send(`Error fetching teams : ${error}`);
    }
}));
router.post("/api/registeredTeam/leader/teamId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { leader, eventId } = req.body;
    try {
        const participant = yield prisma.registeredTeam.findFirst({
            where: {
                eventId: eventId,
                leader: leader,
            },
        });
        if (participant) {
            return res.status(409).json(participant);
        }
        else {
            return res.status(404).json(`Participant not found`);
        }
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
// Route to get registered teams for a specific leader (email)
router.get("/api/registeredTeam/eventId/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const leader = req.params.email;
    try {
        const participants = yield prisma.registeredTeam.findMany({
            where: {
                leader: leader,
            },
        });
        const eventIdArray = participants.map((participant) => participant.eventId);
        const teamIdArray = participants.map((participant) => participant.teamId);
        res.json({ eventIdArray, teamIdArray });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
// Route to get registered teams for a single event by event ID
router.get("/api/registeredTeam/ofSingleEvent/byEventId/:eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    try {
        const participants = yield prisma.registeredTeam.findMany({
            where: {
                eventId: eventId,
            },
        });
        const leaderDetailsPromises = participants.map((participant) => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield prisma.user.findFirst({
                where: {
                    userEmail: participant.leader,
                },
            });
            return data;
        }));
        const leaderDetails = yield Promise.all(leaderDetailsPromises);
        const insiders = leaderDetails.filter((user) => user && user.isUserOPJUStudent);
        const outsiders = leaderDetails.filter((user) => user && !user.isUserOPJUStudent);
        const inSiderCount = insiders.length;
        const outSiderCount = outsiders.length;
        res.json({ inSiderCount, outSiderCount, insiders, outsiders });
    }
    catch (error) {
        res.status(500).send(`Error fetching participants : ${error}`);
    }
}));
// Route to get the count of registered teams per event
router.get("/api/registeredTeam/count/perEvent/:eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    try {
        const participants = yield prisma.registeredTeam.findMany({
            where: {
                eventId: eventId,
            },
        });
        let insiderUser = [];
        let outsiderUser = [];
        participants.forEach((element) => {
            // Extract the email domain from the leader's email address
            const emailDomain = element.leader.split("@")[1];
            // Check if the email domain is 'opju.ac.in'
            if (emailDomain === "opju.ac.in") {
                insiderUser.push(element.leader);
            }
            else {
                outsiderUser.push(element.leader);
            }
        });
        const insiderCount = insiderUser.length;
        const outsiderCount = outsiderUser.length;
        const totalCount = insiderUser.length + outsiderUser.length;
        res.status(201).json({ insiderCount, outsiderCount, totalCount });
    }
    catch (error) {
        res.status(500).send(`Error fetching registered teams: ${error}`);
    }
}));
router.get("/api/registeredTeamAndMembers/Details/perEvent/:eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventId = req.params.eventId;
    try {
        // Fetch event details to get team size
        const eventDetails = yield prisma.event.findUnique({
            where: { eventId },
        });
        if (!eventDetails) {
            return res.status(404).send("Event not found");
        }
        const teamSize = eventDetails.teamSize;
        // Fetch all registered teams for the given event
        const registeredTeams = yield prisma.registeredTeam.findMany({
            where: { eventId },
        });
        // Create a workbook and worksheet
        const workbook = xlsx_1.default.utils.book_new();
        const worksheet = xlsx_1.default.utils.aoa_to_sheet([]);
        // Initialize the row and column counters
        let row = 1;
        let col = 0;
        // Add headers for TeamId, Participants, Insider/Outsider, and User Details
        xlsx_1.default.utils.sheet_add_aoa(worksheet, [
            [
                "Team ID",
                "Participants",
                "Insider/Outsider",
                "Name",
                "Email",
                "Phone no.",
                "University",
                "Gender",
                "District",
                "Pincode",
                "State",
            ],
        ], { origin: `A${row}` });
        row++;
        // Iterate over each registered team
        for (const team of registeredTeams) {
            // Fetch participants for the current team
            const participants = yield prisma.participant.findMany({
                where: { teamId: team.teamId },
            });
            // Fill team ID in the first column
            xlsx_1.default.utils.sheet_add_aoa(worksheet, [[team.teamId]], {
                origin: `A${row}`,
            });
            // Fill participant details in subsequent columns
            let participantIndex = 1;
            for (const participant of participants) {
                const userDetails = yield prisma.user.findUnique({
                    where: { userEmail: participant.participantEmail },
                    select: {
                        id: true,
                        userEmail: true,
                        userName: true,
                        userPic: true,
                        userPhoneNumber: true,
                        userUniversity: true,
                        isUserOPJUStudent: true,
                        userGender: true,
                        userAddressId: true,
                        userAddress: true,
                    },
                });
                if (userDetails) {
                    // Determine if the user is an Insider or Outsider
                    const insiderOrOutsider = userDetails.isUserOPJUStudent
                        ? "Insider"
                        : "Outsider";
                    // Fill participant index in the Participants column
                    const participantIndexLabel = `Participant ${participantIndex}`;
                    xlsx_1.default.utils.sheet_add_aoa(worksheet, [[participantIndexLabel, insiderOrOutsider]], { origin: `B${row}` });
                    // Fill user details in respective columns
                    const userData = [
                        userDetails.userName,
                        userDetails.userEmail,
                        userDetails.userPhoneNumber,
                        userDetails.userUniversity,
                        userDetails.userGender,
                        userDetails.userAddress.district,
                        userDetails.userAddress.pincode,
                        userDetails.userAddress.state,
                    ];
                    // Add user details to the worksheet
                    xlsx_1.default.utils.sheet_add_aoa(worksheet, [userData], {
                        origin: `D${row}`,
                    });
                }
                // Increment the participant index and row counter
                participantIndex++;
                row++;
            }
            // Increment the row counter to leave space between teams
            // row++;
        }
        const spiltedSheet = eventDetails.eventName.slice(0, 30);
        // Add the worksheet to the workbook
        xlsx_1.default.utils.book_append_sheet(workbook, worksheet, `${spiltedSheet}`);
        // Generate the Excel file
        const excelFileName = `Team_Details_${eventId}.xlsx`;
        const excelFilePath = path_1.default.join(os_1.default.homedir(), "Downloads", excelFileName);
        // Write the workbook to the file system
        xlsx_1.default.writeFile(workbook, excelFilePath);
        // Send the file as a response for download
        res.download(excelFilePath, excelFileName, (err) => {
            if (err) {
                console.error("Error sending file:", err);
            }
            // Delete the file after download
            fs_1.default.unlinkSync(excelFilePath);
        });
    }
    catch (error) {
        res.status(500).send(`Error generating Excel sheet: ${error}`);
    }
}));
router.get("/api/alternative/registeredTeamAndMembers/Details/perEvent/eventId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { eventId } = req.body;
    console.log(eventId);
    try {
        // Fetch event details to get team size
        const eventDetails = yield prisma.event.findUnique({
            where: { eventId },
        });
        if (!eventDetails) {
            return res.status(404).send("Event not found");
        }
        // Fetch all registered teams for the given event
        const registeredTeams = yield prisma.registeredTeam.findMany({
            where: { eventId },
        });
        // Create a workbook and worksheet
        const workbook = xlsx_1.default.utils.book_new();
        const worksheet = xlsx_1.default.utils.aoa_to_sheet([]);
        // Initialize the row counter
        let row = 1;
        // Add headers for TeamId, Participants, Insider/Outsider, and User Details
        xlsx_1.default.utils.sheet_add_aoa(worksheet, [
            [
                "Team ID",
                "Participants",
                "Insider/Outsider",
                "Name",
                "Email",
                "Phone no.",
                "University",
                "Gender",
                "District",
                "Pincode",
                "State",
            ],
        ], { origin: `A${row}` });
        row++;
        // Iterate over each registered team
        for (const team of registeredTeams) {
            // Fetch participants for the current team
            const participants = yield prisma.participant.findMany({
                where: { teamId: team.teamId },
            });
            // Fill team ID in the first column
            xlsx_1.default.utils.sheet_add_aoa(worksheet, [[team.teamId]], {
                origin: `A${row}`,
            });
            // Fill participant details in subsequent columns
            let participantIndex = 1;
            for (const participant of participants) {
                const userDetails = yield prisma.user.findUnique({
                    where: { userEmail: participant.participantEmail },
                    select: {
                        userEmail: true,
                        userName: true,
                        userPhoneNumber: true,
                        userAddress: true,
                        userAddressId: true,
                        userUniversity: true,
                        userGender: true,
                        isUserOPJUStudent: true,
                        id: true,
                        userPic: true,
                    },
                });
                if (userDetails) {
                    // Determine if the user is an Insider or Outsider
                    const insiderOrOutsider = userDetails.isUserOPJUStudent
                        ? "Insider"
                        : "Outsider";
                    // Fill participant index in the Participants column
                    const participantIndexLabel = `Participant ${participantIndex}`;
                    xlsx_1.default.utils.sheet_add_aoa(worksheet, [[participantIndexLabel, insiderOrOutsider]], { origin: `B${row}` });
                    // Fill user details in respective columns
                    const userData = [
                        userDetails.userName,
                        userDetails.userEmail,
                        userDetails.userPhoneNumber,
                        userDetails.userUniversity,
                        userDetails.userGender,
                        userDetails.userAddress.district,
                        userDetails.userAddress.pincode,
                        userDetails.userAddress.state,
                    ];
                    // Add user details to the worksheet
                    xlsx_1.default.utils.sheet_add_aoa(worksheet, [userData], {
                        origin: `D${row}`,
                    });
                }
                // Increment the participant index and row counter
                participantIndex++;
                row++;
            }
            // Increment the row counter to leave space between teams
            row++;
        }
        // Add the worksheet to the workbook
        xlsx_1.default.utils.book_append_sheet(workbook, worksheet, `Event_${eventId}`);
        // Generate the Excel file
        const excelFileName = `Team_Details_${eventId}.xlsx`;
        const excelFilePath = path_1.default.join(__dirname, excelFileName);
        xlsx_1.default.writeFile(workbook, excelFilePath);
        // Send the response with the file name
        res.status(200).send({ fileName: excelFileName });
    }
    catch (error) {
        res.status(500).send(`Error generating Excel sheet: ${error}`);
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
