const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mailer = require("./mailer");
const thankMailer = require("./thankMailer");
const registeredEventMailer = require("./registeredMailer");
const cors = require("cors");

const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const os = require('os');

// const corsOptions = {
//   origin: "http://localhost:3000", // Allow requests from this origin
//   methods: ["GET", "POST"], // Allow only GET and POST requests
//   allowedHeaders: ["Content-Type"], // Allow only specific headers
// };
app.use(cors());

const {
	User,
	Event,
	RegisteredTeam,
	Participants,
	Invitation,
	PaymentReceipt,
} = require("./db");
const otpEmail = require("./otpMailer");
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 4000;

//Impression
let visitCount = 0;

// Middleware to increment the visit count on each request to the home page
app.use("/", (req, res, next) => {
	++visitCount;
	next();
});

// Endpoint to get the current visit count
app.get("/api/visitCount", (req, res) => {
	visitCount = visitCount;
	res.json({ visitCount });
});

// Api

app.get("/", (req, res) => {
	console.log("hiiiii");
	res.json({
		msg: "hi there",
	});
});

app.post("/api/create/user", async (req, res) => {
	try {
		const user = req.body;
		const isExsitingUser = await User.findOne({
			userEmail: user.userEmail,
		});
		if (isExsitingUser) {
			const exsitingUser = await User.findOneAndUpdate(
				{ userEmail: user.userEmail },
				user
			);
			return res.status(205).json(`Updated details ${user}`);
			// return res.status(409).json(`User already Exist ${exsitingUser}`)
		}
		thankMailer(user.userEmail);
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).send(`Error creating user: Error ${error}`);
	}
});

// to get all users
app.get("/api/allUsers", async (req, res) => {
	try {
		const user = await User.find();
		const numberOfUsers = await User.countDocuments();
		res.json({ numberOfUsers, user });
	} catch (error) {
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});
app.get("/api/allOutSiderUsers", async (req, res) => {
	try {
		const user = await User.find({ isUserOPJUStudent: false });
		const numberOfUsers = await User.countDocuments({ isUserOPJUStudent: false });
		res.json({ numberOfUsers, user });
	} catch (error) {
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});
app.put("/api/update/userDetails", async (req, res) => {
	try {
		const user = req.body;
		const isExsitingUser = await User.findOne({
			userEmail: user.userEmail,
		});
		if (isExsitingUser) {
			const exsitingUser = await User.findOneAndUpdate(
				{ userEmail: user.userEmail },
				user
			);
			return res.status(205).json(`Updated details ${user}`);
			// return res.status(409).json(`User already Exist ${exsitingUser}`)
		}
		thankMailer(user.userEmail);
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).send(`Error creating user: Error ${error}`);
	}
});

//pass /api/user/example@email.com
app.get("/api/user/:email", async (req, res) => {
	const userEmail = req.params.email;
	try {
		const user = await User.findOne({ userEmail: userEmail });
		if (!user) {
			return res.status(404).json(`User not found: email: ${userEmail}`);
		} else {
			return res.status(409).json(user);
		}
	} catch (error) {
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});

app.get("/api/user/universityVerification/:email", async (req, res) => {
	const userEmail = req.params.email;
	try {
		const user = await User.findOne({ userEmail: userEmail });
		if (!user) {
			return res.status(404).json(`User not found: email: ${userEmail}`);
		}
		const bool = user.isUserOPJUStudent
		return res.status(201).json(bool);
	} catch (error) {
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});

app.get("/api/user/name/:email", async (req, res) => {
	const userEmail = req.params.email;
	try {
		const user = await User.findOne({ userEmail: userEmail });
		if (!user) {
			return res.status(404).json(`User not found: email: ${userEmail}`);
		}
		const name = user.userName
		return res.status(201).json(name);
	} catch (error) {
		res.status(500).send(`Error fetching user details: ${error}`);
	}
});

// EVENTS
app.post("/api/create/event", async (req, res) => {
	try {
		const {
			mainEventId,
			eventName,
			eventDescription,
			eventpic,
			teamSize,
			priceMoney,
			entryFee,
		} = req.body;

		const eventId = generateEventId(eventName, "event");
		const newEvent = await Event.create({
			eventId: eventId,
			mainEventId: mainEventId,
			eventName: eventName,
			eventDescription: eventDescription,
			eventpic: eventpic,
			teamSize: teamSize,
			priceMoney: priceMoney,
			entryFee: entryFee,
		});
		res.status(201).json(newEvent);
	} catch (error) {
		res.status(500).send(`Error creating event=> error: ${error}`);
	}
});

app.put("/api/update/event/byEventId", async (req, res) => {
	try {
		const {
			mainEventId,
			eventId,
			eventName,
			eventDescription,
			eventpic,
			teamSize,
			priceMoney,
			entryFee,
		} = req.body;
		const isExsitingEventID = await Event.findOne({ eventId: eventId })
		if (isExsitingEventID) {
			const newEvent = await Event.findOneAndUpdate({
				eventId: eventId,
			}, {
				eventId: eventId,
				mainEventId: mainEventId,
				eventName: eventName,
				eventDescription: eventDescription,
				eventpic: eventpic,
				teamSize: teamSize,
				priceMoney: priceMoney,
				entryFee: entryFee,
			});
			return res.status(409).json(`Updated ${isExsitingEventID.eventName}`)
		} else {
			return res.status(404).json(`Invalid Event Id`)
		}
	} catch (error) {
		res.status(500).send(`Error creating event=> error: ${error}`);
	}
});

// to get all events
app.get("/api/allEvents", async (req, res) => {
	try {
		const events = await Event.find({ teamSize: { $ne: 0 } });
		res.json(events);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error}`);
	}
});

app.get("/api/allMainEvents", async (req, res) => {
	try {
		const events = await Event.find({ mainEventId: "Technorollix2k24" });
		res.json(events);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error}`);
	}
});

app.get("/api/allSubEvents/:eventId", async (req, res) => {
	const request = req.params.eventId;
	try {
		const events = await Event.find({ mainEventId: request });
		res.json(events);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error}`);
	}
});

app.post("/api/allSubEvents/eventIdArray/byMainIdArray", async (req, res) => {
	try {
		const { mainEventsArray } = req.body;
		console.log(mainEventsArray);
		// Validate mainEventsArray
		if (!Array.isArray(mainEventsArray)) {
			return res.status(400).json({ error: 'eventId must be an array' });
		}
		let response = [];

		// Use for...of loop for sequential execution
		for (const mainEventId of mainEventsArray) {
			const subEvents = await Event.find({ mainEventId: mainEventId });

			// Extract subEventIds from subEvents
			const subEventsId = subEvents.map(element => element.eventId);

			response.push(subEvents);
		}
		res.json(response);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error.message}`);
	}
});

app.get("/api/allEvents/technorollix", async (req, res) => {
	try {
		const events = await Event.find();
		res.json(events);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error}`);
	}
});

app.get("/api/byEventId/:eventId", async (req, res) => {
	const eventId = req.params.eventId;
	try {
		const events = await Event.find({ eventId: eventId });
		// const numberOfEvents = await Event.countDocuments();
		// res.json({ numberOfEvents, events });
		res.json(events);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error}`);
	}
});

app.get("/api/eventName/byEventId/:eventId", async (req, res) => {
	const eventId = req.params.eventId;
	try {
		const events = await Event.findOne({ eventId: eventId });
		// const numberOfEvents = await Event.countDocuments();
		// res.json({ numberOfEvents, events });
		res.json(events.eventName);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error}`);
	}
});

app.get("/api/byArrayEventId", async (req, res) => {
	const { eventIdArr } = req.body;
	try {
		const events = Event.find();
		let reqEvents = (await events).filter((e) =>
			eventIdArr.includes(e.eventId)
		);
		res.json(reqEvents);
	} catch (error) {
		res.status(500).send(`Error fetching event details: ${error}`);
	}
});

// Team Registration
app.post("/api/team-registration/event", async (req, res) => {
	try {
		// const leader = req.params.email;
		// const leader = req.headers.user_email;
		const { eventId, leader, additionalDetails } = req.body;
		if (eventId.length !== additionalDetails.length) {
			return res
				.status(400)
				.send(
					"eventId and additionalDetails array length should be the same"
				);
		}

		const user = await User.find({ userEmail: leader });
		if (!user) {
			return res
				.status(404)
				.send(
					`User is not registered: Email: ${leader}, Event: ${eventId}`
				);
		}
		// const isParticipated = await Participants.find({eventId:{$eq : reqEvent}, teamId:{$eq : reqTeam}, participantEmail: {$eq : reqUser}});

		const registrations = [];
		const registeredEventId = [];
		for (let i = 0; i < eventId.length; i++) {
			const event = await Event.findOne({ eventId: eventId[i] });
			if (!event) {
				return res
					.status(408)
					.send(`Event is not registered: Email: ${event}`);
			}
			const teamId = generateTeamId(event.eventName, leader);
			const team = await RegisteredTeam.findOne({ teamId: teamId });
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
			await Invitation.updateMany(
				{ eventId: eventId[i] },
				{ status: "rejected" }
			);
			const participant = await Participants.findOne({
				eventId: event.eventId,
				participantEmail: leader,
			});
			if (participant) {
				continue;
			}
			registeredEventId.push(event.eventId);
			await Participants.create({
				eventId: event.eventId,
				teamId: teamId,
				participantEmail: leader,
			});
		}
		if (registrations.length > 0) {
			await registeredEventMailer(leader, registeredEventId);
		}
		const createdRegistrations = await RegisteredTeam.insertMany(
			registrations
		);
		res.status(201).json({
			total_event_registered: registrations.length,
			createdRegistrations,
		});
	} catch (error) {
		res.status(500).send(`Error regitring team=> error: ${error}`);
	}
});

app.get("/api/allTeams", async (req, res) => {
	try {
		const registeredTeam = await RegisteredTeam.find();
		const totalRegisteredTeam = await RegisteredTeam.countDocuments();
		res.json({ totalRegisteredTeam, registeredTeam });
	} catch (error) {
		res.status(500).send(
			`Error fetching registered team details : ${error}`
		);
	}
});

app.get("/api/allOutSiderTeams", async (req, res) => {
	try {
		const participants = await RegisteredTeam.find();
		// console.log(participants);
		const leaderDetailsPromises = participants.map(async (element) => {
			const data = await User.findOne({ userEmail: element.leader });
			return data;
		});
		const leaderDetails = await Promise.all(leaderDetailsPromises);
		console.log(leaderDetails);
		const outsidersLeaders = leaderDetails.filter(user => !user.isUserOPJUStudent);
		const outSiderCount = outsidersLeaders.length;
		res.json({ outSiderCount, outsidersLeaders });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/allOutSiderTeams/eventId/teamId", async (req, res) => {
	try {
		const teams = await RegisteredTeam.find();
		let insiderUser = [];
		let outsiderUser = [];
		teams.forEach((element) => {
			// Extract the email domain from the leader's email address
			const emailDomain = element.leader.split('@')[1];
			// Check if the email domain is 'opju.ac.in'
			if (emailDomain === 'opju.ac.in') {
				insiderUser.push(element);
			} else {
				outsiderUser.push(element);
			}
		});
		let outsideCount = outsiderUser.length;
		res.status(201).json({ outsideCount, outsiderUser });
	} catch (error) {
		res.status(500).send(`Error fetching teams : ${error}`);
	}
});

app.get("/api/allInSiderTeams/eventId/teamId", async (req, res) => {
	try {
		const teams = await RegisteredTeam.find();
		let insiderUser = [];
		let outsiderUser = [];
		teams.forEach((element) => {
			// Extract the email domain from the leader's email address
			const emailDomain = element.leader.split('@')[1];
			// Check if the email domain is 'opju.ac.in'
			if (emailDomain === 'opju.ac.in') {
				insiderUser.push(element);
			} else {
				outsiderUser.push(element);
			}
		});
		let insideCount = insiderUser.length;
		res.status(201).json({ insideCount, insiderUser });
	} catch (error) {
		res.status(500).send(`Error fetching teams : ${error}`);
	}
});
app.post("/api/registeredTeam/leader/teamId", async (req, res) => {
	const { leader, eventId } = req.body;
	try {
		const participants = await RegisteredTeam.findOne({
			eventId: eventId,
			leader: leader,
		});
		if (participants) {
			return res.status(409).json(participants);
		} else {
			return res.status(404).json(`participant not found`);
		}
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/registeredTeam/eventId/:email", async (req, res) => {
	const leader = req.params.email;
	try {
		const participants = await RegisteredTeam.find({
			leader: leader,
		});
		let eventIdArray = [];
		let teamIdArray = [];
		participants.forEach((element) => {
			eventIdArray.push(element.eventId);
		});
		participants.forEach((element) => {
			teamIdArray.push(element.teamId);
		});
		res.json({ eventIdArray, teamIdArray });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/registeredTeam/ofSingleEvent/byEventId/:eventId", async (req, res) => {
	const eventId = req.params.eventId;
	try {
		const participants = await RegisteredTeam.find({ eventId: eventId });
		const leaderDetailsPromises = participants.map(async (element) => {
			const data = await User.findOne({ userEmail: element.leader });
			return data;
		});
		const leaderDetails = await Promise.all(leaderDetailsPromises);
		const insiders = leaderDetails.filter(user => user.isUserOPJUStudent);
		const outsiders = leaderDetails.filter(user => !user.isUserOPJUStudent);
		const inSiderCount = insiders.length;
		const outSiderCount = outsiders.length;
		res.json({ inSiderCount, outSiderCount, insiders, outsiders });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/registeredTeam/count/perEvent/:eventId", async (req, res) => {
	const eventId = req.params.eventId;
	try {
		const participants = await RegisteredTeam.find({
			eventId: eventId
		});
		let insiderUser = [];
		let outsiderUser = [];
		participants.forEach((element) => {
			// Extract the email domain from the leader's email address
			const emailDomain = element.leader.split('@')[1];
			// Check if the email domain is 'opju.ac.in'
			if (emailDomain === 'opju.ac.in') {
				insiderUser.push(element.leader);
			} else {
				outsiderUser.push(element.leader);
			}
		});
		let insiderCount = insiderUser.length;
		let outsiderCount = outsiderUser.length;
		let totalCount = insiderUser.length + outsiderUser.length;
		res.status(201).json({ insiderCount, outsiderCount, totalCount });
	} catch (error) {
		res.status(500).send(`Error fetching registered teams: ${error}`);
	}
});

app.get("/api/registeredTeamAndMembers/Details/perEvent/:eventId", async (req, res) => {
	const eventId = req.params.eventId;
	try {
		// Fetch event details to get team size
		const eventDetails = await Event.findOne({ eventId: eventId });
		if (!eventDetails) {
			return res.status(404).send("Event not found");
		}
		const teamSize = eventDetails.teamSize;

		// Fetch all registered teams for the given event
		const registeredTeams = await RegisteredTeam.find({ eventId: eventId });

		// Create a workbook and worksheet
		const workbook = xlsx.utils.book_new();
		const worksheet = xlsx.utils.aoa_to_sheet([]);

		// Initialize the row and column counters
		let row = 1;
		let col = 0;

		// Add headers for TeamId, Participants, Insider/Outsider, and User Details
		xlsx.utils.sheet_add_aoa(worksheet, [['Team ID', 'Participants', 'Insider/Outsider', 'Name', 'Email', 'Phone no.', 'University', 'Gender', 'District', 'Pincode', 'State']], { origin: `A${row}` });
		row++;

		// Iterate over each registered team
		for (const team of registeredTeams) {
			// Fetch participants for the current team
			const participants = await Participants.find({ teamId: team.teamId });

			// Fill team ID in the first column
			xlsx.utils.sheet_add_aoa(worksheet, [[team.teamId]], { origin: `A${row}` });

			// Fill participant details in subsequent columns
			let participantIndex = 1;
			for (const participant of participants) {
				const userDetails = await User.findOne({ userEmail: participant.participantEmail });

				if (userDetails) {
					// Determine if the user is an Insider or Outsider
					const insiderOrOutsider = userDetails.isUserOPJUStudent ? 'Insider' : 'Outsider';

					// Fill participant index in the Participants column
					const participantIndexLabel = `Participant ${participantIndex}`;
					xlsx.utils.sheet_add_aoa(worksheet, [[participantIndexLabel, insiderOrOutsider]], { origin: `B${row}` });

					// Fill user details in respective columns
					const userData = [
						userDetails.userName,
						userDetails.userEmail,
						userDetails.userPhoneNumber,
						userDetails.userUniversity,
						userDetails.userGender,
						userDetails.userAddress.district,
						userDetails.userAddress.pincode,
						userDetails.userAddress.state
					];

					// Add user details to the worksheet
					xlsx.utils.sheet_add_aoa(worksheet, [userData], { origin: `D${row}` });
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
		xlsx.utils.book_append_sheet(workbook, worksheet, `${spiltedSheet}`);

		// Generate the Excel file
		const excelFileName = `Team_Details_${eventId}.xlsx`;
		const excelFilePath = path.join(os.homedir(), 'Downloads', excelFileName);

		// Write the workbook to the file system
		xlsx.writeFile(workbook, excelFilePath);

		// Send the file as a response for download
		res.download(excelFilePath, excelFileName, (err) => {
			if (err) {
				console.error('Error sending file:', err);
			}
			// Delete the file after download
			fs.unlinkSync(excelFilePath);
		});
	} catch (error) {
		res.status(500).send(`Error generating Excel sheet: ${error}`);
	}
});

app.get("/api/alternative/registeredTeamAndMembers/Details/perEvent/eventId", async (req, res) => {
    const {eventId} = req.body;
	console.log(eventId);
    try {
        // Fetch event details to get team size
        const eventDetails = await Event.findOne({eventId: eventId});
        if (!eventDetails) {
            return res.status(404).send("Event not found");
        }
        const teamSize = eventDetails.teamSize;

        // Fetch all registered teams for the given event
        const registeredTeams = await RegisteredTeam.find({ eventId: eventId });

        // Create a workbook and worksheet
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.aoa_to_sheet([]);

        // Initialize the row and column counters
        let row = 1;
        let col = 0;

        // Add headers for TeamId, Participants, Insider/Outsider, and User Details
        xlsx.utils.sheet_add_aoa(worksheet, [['Team ID', 'Participants', 'Insider/Outsider', 'Name', 'Email', 'Phone no.', 'University', 'Gender', 'District', 'Pincode', 'State']], { origin: `A${row}` });
        row++;

        // Iterate over each registered team
        for (const team of registeredTeams) {
            // Fetch participants for the current team
            const participants = await Participants.find({ teamId: team.teamId });

            // Fill team ID in the first column
            xlsx.utils.sheet_add_aoa(worksheet, [[team.teamId]], { origin: `A${row}` });

            // Fill participant details in subsequent columns
            let participantIndex = 1;
            for (const participant of participants) {
                const userDetails = await User.findOne({ userEmail: participant.participantEmail });

                if (userDetails) {
                    // Determine if the user is an Insider or Outsider
                    const insiderOrOutsider = userDetails.isUserOPJUStudent ? 'Insider' : 'Outsider';

                    // Fill participant index in the Participants column
                    const participantIndexLabel = `Participant ${participantIndex}`;
                    xlsx.utils.sheet_add_aoa(worksheet, [[participantIndexLabel, insiderOrOutsider]], { origin: `B${row}` });

                    // Fill user details in respective columns
                    const userData = [
                        userDetails.userName,
                        userDetails.userEmail,
                        userDetails.userPhoneNumber,
                        userDetails.userUniversity,
                        userDetails.userGender,
                        userDetails.userAddress.district,
                        userDetails.userAddress.pincode,
                        userDetails.userAddress.state
                    ];

                    // Add user details to the worksheet
                    xlsx.utils.sheet_add_aoa(worksheet, [userData], { origin: `D${row}` });
                }

                // Increment the participant index and row counter
                participantIndex++;
                row++;
            }

            // Increment the row counter to leave space between teams
            row++;
        }

        // Add the worksheet to the workbook
        xlsx.utils.book_append_sheet(workbook, worksheet, `Event_${eventId}`);

        // Generate the Excel file
        const excelFileName = `Team_Details_${eventId}.xlsx`;
        xlsx.writeFile(workbook, excelFileName);

        // Send the response with the file name
        res.status(200).send({ fileName: excelFileName });
    } catch (error) {
        res.status(500).send(`Error generating Excel sheet: ${error}`);
    }
});


// Participants
app.post("/api/register/participant", async (req, res) => {
	// const {reqEvent, reqTeam, reqUser} = req.body;
	// const {reqTeam, reqUser} = req.body;
	const { teamId, participantEmail } = req.body;
	try {
		// const event = await Event.findOne({eventId: reqEvent});
		// if (!event) {
		//   return res.status(404).send(`Event not found: Event-Id: ${reqEvent}`);
		// }
		const team = await RegisteredTeam.findOne({ teamId: teamId });
		if (!team) {
			return res
				.status(404)
				.send(`Team is not registered: Team-id: ${teamId}`);
		}
		const user = await User.findOne({ userEmail: participantEmail });
		if (!user) {
			return res
				.status(404)
				.send(`User is not registered: Email: ${participantEmail}`);
		}
		// const isParticipated = await Participants.find({eventId:{$eq : reqEvent}, teamId:{$eq : reqTeam}, participantEmail: {$eq : reqUser}});
		const isParticipated = await Participants.findOne({
			teamId: { $eq: teamId },
			participantEmail: { $eq: participantEmail },
		});
		if (isParticipated) {
			return res
				.status(409)
				.json(
					`User: ${participantEmail} already registered with team: ${teamId}`
				);
		}
		// const participant = await Participants.create({eventId: reqEvent,teamId: reqTeam,participantEmail: reqUser});
		const participant = await Participants.create({
			teamId: teamId,
			participantEmail: participantEmail,
		});
		res.json(participant);
	} catch (error) {
		res.status(500).send(
			`Error registering user ${participantEmail} with team ${teamId} \nerror: ${error}`
		);
	}
});

app.get("/api/allParticipants", async (req, res) => {
	try {
		const participants = await Participants.find();
		// const totalParticipant = await Participants.countDocuments();
		// res.json({ totalParticipant, participants })
		res.json(participants);
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});
app.get("/api/participant/eventId/:email", async (req, res) => {
	const participantEmail = req.params.email;
	try {
		const participants = await Participants.find({
			participantEmail: participantEmail,
		});
		let eventIdArray = [];
		participants.forEach((element) => {
			eventIdArray.push(element.eventId);
		});
		res.json(eventIdArray);
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/participant/:email", async (req, res) => {
	const participantEmail = req.params.email;
	try {
		const participants = await Participants.find({
			participantEmail: participantEmail,
		});
		const totalParticipation = await Participants.countDocuments({
			participantEmail: participantEmail,
		});
		res.json({ totalParticipation, participants });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});
app.get("/api/participants/count/perEvent/:eventId", async (req, res) => {
	const eventId = req.params.eventId;
	try {
		const participants = await Participants.find({
			eventId: eventId
		});
		let insiderUser = [];
		let outsiderUser = [];
		participants.forEach((element) => {
			// Extract the email domain from the leader's email address
			const emailDomain = element.participantEmail.split('@')[1];
			// Check if the email domain is 'opju.ac.in'
			if (emailDomain === 'opju.ac.in') {
				insiderUser.push(element.participantEmail);
			} else {
				outsiderUser.push(element.participantEmail);
			}
		});
		let insiderCount = insiderUser.length;
		let outsiderCount = outsiderUser.length;
		let totalCount = insiderUser.length + outsiderUser.length;
		res.status(201).json({ insiderCount, outsiderCount, totalCount });
	} catch (error) {
		res.status(500).send(`Error fetching registered teams: ${error}`);
	}
});
app.get("/api/allOutSiderParticipants", async (req, res) => {
	try {
		const participants = await Participants.find();
		const leaderDetailsPromises = participants.map(async (element) => {
			const data = await User.findOne({ userEmail: element.participantEmail });
			return data;
		});
		const leaderDetails = await Promise.all(leaderDetailsPromises);
		const outsidersLeaders = leaderDetails.filter(user => !user.isUserOPJUStudent);
		console.log(outsidersLeaders);
		const outSiderCount = outsidersLeaders.length;
		res.json({ outSiderCount, outsidersLeaders });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});
app.get("/api/allOutSiderParticipants/eventId/teamId", async (req, res) => {
	try {
		const participants = await Participants.find();
		let insiderUser = [];
		let outsiderUser = [];
		participants.forEach((element) => {
			// Extract the email domain from the leader's email address
			const emailDomain = element.participantEmail.split('@')[1];
			// Check if the email domain is 'opju.ac.in'
			if (emailDomain === 'opju.ac.in') {
				insiderUser.push(element);
			} else {
				outsiderUser.push(element);
			}
		});
		let outsideCount = outsiderUser.length;
		res.status(201).json({ outsideCount, outsiderUser });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/allInSiderParticipants/eventId/teamId", async (req, res) => {
	try {
		const participants = await Participants.find();
		let insiderUser = [];
		let outsiderUser = [];
		participants.forEach((element) => {
			// Extract the email domain from the leader's email address
			const emailDomain = element.participantEmail.split('@')[1];
			// Check if the email domain is 'opju.ac.in'
			if (emailDomain === 'opju.ac.in') {
				insiderUser.push(element);
			} else {
				outsiderUser.push(element);
			}
		});
		let insideCount = insiderUser.length;
		res.status(201).json({ insideCount, insiderUser });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});
//Team-members
app.get("/api/participant/teamMembers/:teamId", async (req, res) => {
	const teamId = req.params.teamId;
	try {
		const participants = await Participants.find({
			teamId: teamId,
		});
		res.json(participants);
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/myParticipations/allTeam/:email", async (req, res) => {
	const email = req.params.email;
	try {

		const participants = await Participants.find({
			participantEmail: email,
		});
		const rawResult = participants.map(async (p) => {
			const eventDetails = await Event.findOne({ eventId: p.eventId });
			let leader = p.teamId.split(`team-${eventDetails.eventName}-`)[1];
			const teamDetails = await Participants.find({ teamId: p.teamId });
			const rawTeamMembers = teamDetails.map(async (t) => {
				const userDetails = await User.findOne({ userEmail: t.participantEmail });
				if (t.participantEmail === leader) {
					leader = userDetails.userName;
					return null;
				} else {
					return userDetails.userName;
				}
			})
			const teamMembers = await Promise.all(rawTeamMembers);
			let finalMembers = []
			for (let index = 0; index < teamMembers.length; index++) {
				if (teamMembers[index] === null) {
					continue;
				} else {
					finalMembers.push(teamMembers[index])
				}
			}
			let items = { event: { eventName: eventDetails.eventName, teamSize: eventDetails.teamSize }, leader: leader, teamMembers: finalMembers }
			return items;
		})
		const result = await Promise.all(rawResult);
		// console.log(result);
		res.status(201).json(result);
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

// Invitation
app.post("/api/create/team-invite", async (req, res) => {
	const { teamId, inviterEmail, inviteeEmail } = req.body;
	console.log(teamId);
	console.log(inviterEmail);
	console.log(inviteeEmail);
	try {
		// const event = await Event.findOne({ eventId: eventId });
		// if (!event) {
		//   return res.status(404).send(`Event is not registered: Event-id: ${eventId}`);
		// }
		const team = await RegisteredTeam.findOne({ teamId: teamId });
		if (!team) {
			return res
				.status(404)
				.send(`Team is not registered: Team-id: ${teamId}`);
		}
		const user = await User.findOne({ userEmail: inviterEmail });
		if (!user) {
			return res
				.status(404)
				.send(`User is not registered: Email: ${inviterEmail}`);
		}
		const event = await Event.findOne({ eventId: team.eventId });
		if (team.leader !== user.userEmail || event.teamSize < 2) {
			return res.status(409).json({
				error: `Error1 Inviting user ${inviteeEmail} with team ${teamId} by leader ${inviterEmail} \nerror: ${error}`,
			});
		}
		const totalInvitation = await Invitation.countDocuments({
			inviterEmail: inviterEmail,
			teamId: teamId,
			status: { $ne: "rejected" },
		});
		const isInvited = await Invitation.findOne({
			teamId: { $eq: teamId },
			inviterEmail: { $eq: inviterEmail },
			inviteeEmail: { $eq: inviteeEmail },
		});
		if (isInvited) {
			if (isInvited.status === "pending") {
				return res
					.status(410)
					.json(
						`User: ${inviteeEmail} already invited to join team: ${teamId}`
					);
			} else if (isInvited.status === "rejected") {
				return res
					.status(411)
					.json(
						`User: ${inviteeEmail} have rejected invitation to join team: ${teamId}`
					);
			}
			{
				return res
					.status(412)
					.json(`User: ${inviteeEmail} has joined different team`);
			}
		}
		const hasJoined = await Participants.findOne({
			eventId: team.eventId,
			participantEmail: inviteeEmail,
		});
		if (hasJoined) {
			return res
				.status(413)
				.json(
					`User: ${inviteeEmail} has joined different team for ${team.eventId}`
				);
		}

		if (totalInvitation < event.teamSize - 1) {
			const invitationId = generateInvitationId(teamId, inviteeEmail);
			const invitation = await Invitation.create({
				invitationId: invitationId,
				eventId: team.eventId,
				teamId: teamId,
				inviterEmail: inviterEmail,
				inviteeEmail: inviteeEmail,
			});
			console.log(invitation);
			const sendMail = await mailer(invitation.inviteeEmail, teamId);
			res.status(201).json(invitation);
		} else {
			return res.status(414).send(`Error3 Limit cross`);
		}
	} catch (error) {
		res.status(500).send(
			`Error2 Inviting user ${inviteeEmail} with team ${teamId} by leader ${inviterEmail} \nerror: ${error}`
		);
	}
});

app.put("/api/update/team-invite", async (req, res) => {
	const { teamId, inviterEmail, inviteeEmail, response } = req.body;
	try {
		const acceptedInvite = await Invitation.findOneAndUpdate(
			{ teamId, inviteeEmail, status: "pending" },
			{ status: response === "accept" ? "accepted" : "rejected" }
		);

		const invitation = await RegisteredTeam.findOne({ teamId: teamId });
		// If accepted, decline other invitations for the same event
		if (response === "accept") {
			await Invitation.updateMany(
				{
					eventId: invitation.eventId,
					inviteeEmail: { $eq: inviteeEmail },
					status: { $ne: "accepted" },
				},
				{ status: "rejected" }
			);
			const registered = await Participants.create({
				eventId: invitation.eventId,
				teamId: teamId,
				participantEmail: inviteeEmail,
			});
			return res.status(200).json({
				result: `Invitation accepted: ${invitation.eventId}`,
				registered,
			});
		} else {
			return res.status(404).send("rejected");
		}
	} catch (error) {
		res.status(500).send(
			`Error responding user ${inviterEmail} invitation for ${teamId}\nerror: ${error}`
		);
	}
});
app.put("/api/restore/team-invite", async (req, res) => {
	try {
		const allInvitations = await Invitation.find();
		const waiting = allInvitations.map(async (i) => {
			const participation = await Participants.findOne({ teamId: i.teamId, participantEmail: i.inviteeEmail });
			// console.log(participation);
			if (participation !== null) {
				const acceptedInvite = await Invitation.findOneAndUpdate(
					{ teamId: i.teamId, inviteeEmail: i.inviteeEmail, inviterEmail: i.inviterEmail },
					{ status: "accepted" }
				);
				return acceptedInvite;
			}else{
				const pendingInvite = await Invitation.findOneAndUpdate(
					{ teamId: i.teamId, inviteeEmail: i.inviteeEmail, inviterEmail: i.inviterEmail },
					{ status: "rejected" }
				);
				return pendingInvite;
			}
		});
		const result = await Promise.all(waiting)
		return res.status(201).json({total: result.length,Result: result});
	} catch (error) {
		res.status(500).send(
			`Error responding user ${inviterEmail} invitation for ${teamId}\nerror: ${error}`
		);
	}
});


app.delete("/api/delete/team/invite", async (req, res) => {
	const { teamId, inviterEmail, inviteeEmail } = req.body;
	try {
		console.log("deleting");
		console.log(teamId);
		console.log(inviterEmail);
		console.log(inviteeEmail);
		await Invitation.findOneAndDelete(
			{ teamId: teamId, inviteeEmail: inviteeEmail, inviterEmail: inviterEmail }
		);
		console.log("deleted");
		return res.status(200).json({
			result: `Invitation deleted:`,
		});
	} catch (error) {
		res.status(500).send(
			`Error responding user ${inviterEmail} invitation for ${teamId}\nerror: ${error}`
		);
	}
});

app.get("/api/event/invitations/email/:email", async (req, res) => {
	const request = req.params.email;
	try {
		const invitation = await Invitation.find({
			inviteeEmail: request,
			status: "pending",
		});
		const totalInvitation = await Invitation.countDocuments({
			inviteeEmail: request,
			status: "pending",
		});
		res.json({ totalInvitation, invitation });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/eventName/inviterName/invitations/email/:email", async (req, res) => {
	const request = req.params.email;
	try {
		const rawInvitations = await Invitation.find({
			inviteeEmail: request,
			status: "pending",
		});
		const eventDetailsPromises = rawInvitations.map(async (element) => {
			// const event = await Event.findOne({ eventId: element.eventId });
			// const inviter = await User.findOne({ inviterEmail: element.inviterEmail });
			const [event, inviter] = await Promise.all([
				Event.findOne({ eventId: element.eventId }),
				User.findOne({ userEmail: element.inviterEmail })
			]);
			const invites = {
				invitationId: element.invitationId,
				status: element.status,
				eventName: event.eventName,
				teamId: element.teamId,
				inviterName: inviter.userName,
				inviteeEmail: element.inviteeEmail
			}
			return invites;
		});
		const invitation = await Promise.all(eventDetailsPromises);
		const totalInvitation = await Invitation.countDocuments({
			inviteeEmail: request,
			status: "pending",
		});
		res.json({ totalInvitation, invitation });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});
app.get("/api/event/invitations/inviteId/:invitationId", async (req, res) => {
	const request = req.params.invitationId;
	try {
		const invitation = await Invitation.find({ invitationId: request });
		const totalInvitation = await Invitation.countDocuments({
			invitationId: request,
		});
		res.json(invitation);
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

app.get("/api/event/invite/status/:email", async (req, res) => {
	const request = req.params.email;
	try {
		const invitation = await Invitation.find({ inviterEmail: request });
		const totalInvitation = await Invitation.countDocuments({
			inviterEmail: request,
		});
		res.json({ totalInvitation, invitation });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});
app.post("/api/event/invite/status/byInviter/teamId", async (req, res) => {
	const { inviterEmail, teamId } = req.body;
	try {
		const invitation = await Invitation.find({
			inviterEmail: inviterEmail,
			teamId: teamId,
		});
		const totalInvitation = await Invitation.countDocuments({
			inviterEmail: inviterEmail,
			teamId: teamId,
		});
		res.json({ totalInvitation, invitation });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});
//Post inplace of get
app.post("/api/event/invite/status/byInviter/eventId", async (req, res) => {
	const { inviterEmail, eventId } = req.body;
	try {
		const invitation = await Invitation.find({
			inviterEmail: inviterEmail,
			eventId: eventId,
		});
		const totalInvitation = await Invitation.countDocuments({
			inviterEmail: inviterEmail,
			eventId: eventId,
		});
		res.json({ totalInvitation, invitation });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

// inviterEmail: inviterEmail, teamId: teamId,status: {$ne: "rejected"}
app.get("/api/event/allInvites", async (req, res) => {
	try {
		const invitation = await Invitation.find();
		const totalInvitation = await Invitation.countDocuments();
		res.json({ totalInvitation, invitation });
	} catch (error) {
		res.status(500).send(`Error fetching participants : ${error}`);
	}
});

function generateEventId(fooName, type) {
	const first5Chars = fooName;
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = (currentDate.getMonth() + 1)
		.toString()
		.padStart(2, "0");
	// const currentDay = currentDate.getDate().toString().padStart(2, "0");
	// const currentHour = currentDate.getHours().toString().padStart(2, "0");
	// const currentMinute = currentDate.getMinutes().toString().padStart(2, "0");
	// const currentSecond = currentDate.getSeconds().toString().padStart(2, "0");

	// Use type in the ID if needed
	const typeId = type ? `${type}-` : "";

	const fooId = `${first5Chars}-${currentYear}${currentMonth}`;

	return `${typeId}${fooId}`;
}

function generateTeamId(EventName, leader) {
	const EventNameChars = EventName;
	// const leaderChars = EventId.substring(0, 7);

	// Use type in the ID if needed
	// const typeId = type ? `${type}-` : '';

	const fooId = `${EventNameChars}-${leader}`;

	return `team-${fooId}`;
}

function generateInvitationId(teamId, invitiiEmail) {
	// const EventNameChars = eventId;
	// const leaderChars = EventId.substring(0, 7);

	// Use type in the ID if needed
	// const typeId = type ? `${type}-` : '';

	const fooId = `invite-${teamId}-${invitiiEmail}`;

	return fooId;
}

app.post("/api/email/verify/otp", async (req, res) => {
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

app.post("/api/payment/gateway/receipt", async (req, res) => {
	console.log("enter");
	try {
		const { userEmail, paymentId, numberOfEvents, paidEntryFee } = req.body;
		console.log(`userEmail ${userEmail}`);
		console.log(`userEmail ${paymentId}`);
		console.log(`userEmail ${numberOfEvents}`);
		console.log(`userEmail ${paidEntryFee}`);

		const isExsitingID = await PaymentReceipt.findOne({
			paymentId: paymentId
		});
		if (isExsitingID) {
			return res.status(409).json(`Already exist ${isExsitingID}`);
		}
		const receipt = await PaymentReceipt.create({ userEmail: userEmail, paymentId: paymentId, numberOfEvents: numberOfEvents, paidEntryFee: paidEntryFee })
		res.status(201).json(receipt);
	} catch (error) {
		console.log(error);
		res.status(500).json(`error hai`);
	}
});

app.get("/api/payment/gateway/receipt/details", async (req, res) => {
	console.log("enter");
	try {
		const { paymentId } = req.body;
		const isExsitingID = await PaymentReceipt.findOne({
			paymentId: paymentId
		});
		res.status(201).json(`Data ${isExsitingID}`);
	} catch (error) {
		console.log(error);
		res.status(500).json(`error hai`);
	}
});
app.get("/api/payment/allreceipt/gateway/details", async (req, res) => {
	console.log("enter");
	try {
		const isExsitingID = await PaymentReceipt.find();
		res.status(201).json({ isExsitingID });
	} catch (error) {
		console.log(error);
		res.status(500).json(`error hai`);
	}
});
app.delete("/api/delete/event/ekKhatam", async (req, res) => {
	try {
		const { eventId } = req.body;
		const reqEvent = await Event.findOneAndDelete({ eventId: eventId });
		res.status(200).send(`Event deleted all ${reqEvent}`);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});
app.delete("/api/delete/event/purakhatam", async (req, res) => {
	try {
		// const eventId = res.params.eventId
		const reqEvent = await Event.deleteMany();
		res.status(200).send(`Event deleted all `);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});
app.delete("/api/delete/team/purakhatam", async (req, res) => {
	try {
		// const eventId = res.params.eventId
		const reqEvent = await RegisteredTeam.deleteMany();
		res.status(200).send(`Teams deleted all `);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});
app.delete("/api/delete/team/ekKhatam", async (req, res) => {
	try {
		const { teamId } = req.body;
		const reqEvent = await RegisteredTeam.findOneAndDelete({ teamId: teamId });
		res.status(200).send(`Event deleted single team ${teamId}`);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});
app.delete("/api/delete/user/purakhatam", async (req, res) => {
	try {
		// const eventId = res.params.eventId
		const reqEvent = await User.deleteMany();
		res.status(200).send(`User deleted all `);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});

app.delete("/api/delete/user/ekKhatam", async (req, res) => {
	try {
		const { userEmail } = req.body;
		const reqEvent = await User.findOneAndDelete({ userEmail: userEmail });
		res.status(200).send(`Event deleted single user ${userEmail}`);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});
app.delete("/api/delete/invitation/purakhatam", async (req, res) => {
	try {
		// const eventId = res.params.eventId
		const reqEvent = await Invitation.deleteMany();
		res.status(200).send(`Invitation deleted all `);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});
app.delete("/api/delete/participants/purakhatam", async (req, res) => {
	try {
		// const eventId = res.params.eventId
		const reqEvent = await Participants.deleteMany();
		res.status(200).send(`Participants deleted all `);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});

app.delete("/api/delete/participant/ekKhatam", async (req, res) => {
	try {
		const { eventId, teamId, participantEmail } = req.body;
		const reqEvent = await Participants.findOneAndDelete({ eventId: eventId, teamId: teamId, participantEmail: participantEmail });
		res.status(200).send(`Event deleted participant ${eventId} ${teamId} ${participantEmail}`);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});

app.delete("/api/delete/receipt/ekKhatam", async (req, res) => {
	try {
		const { userEmail, paymentId } = req.body;
		const reqEvent = await PaymentReceipt.findOneAndDelete({ userEmail: userEmail, paymentId: paymentId });
		res.status(200).send(`Event deleted receipt ${userEmail} ${paymentId}`);
	} catch (error) {
		res.status(500).send(`error deleting event=> error = ${error}`);
	}
});
app.delete("/api/delete/invitation/bySender/invitationId", async (req, res) => {
	const { invitationId } = req.body;
	try {
		const invitation = await Invitation.findOne({
			invitationId: invitationId,
			status: { $ne: "accepted" },
		});
		if (invitation) {
			await Invitation.findOneAndDelete({ invitationId: invitationId });
			return res.status(201).json(`Invitation successfully deleted`);
		} else {
			return res.status(404).json(`Invitation not find`);
		}
	} catch (error) {
		res.status(500).send(`Error deleting invitation : ${error}`);
	}
});
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

// const server = app.listen(PORT, IP, () => {
//   console.log(`Server is running at http://${IP}:${PORT}`);
// });
