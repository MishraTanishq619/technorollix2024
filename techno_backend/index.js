const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mailer = require("./mailer");
const cors = require("cors");
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
} = require("./db");
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 4000;
// const IP = "10.60.41.209";

//Impression
let visitCount = 0;

// Middleware to increment the visit count on each request to the home page
app.use("/", (req, res, next) => {
  ++visitCount;
  next();
});

// Endpoint to get the current visit count
app.get("/api/visitCount", (req, res) => {
  visitCount= visitCount;
  res.json({visitCount} );
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
    const isExsitingUser = await User.findOne({userEmail: user.userEmail});
    if (isExsitingUser) {
      const exsitingUser = await User.findOneAndUpdate({userEmail: user.userEmail},user);
      return res.status(205).json(`Updated details ${user}`); 
    // return res.status(409).json(`User already Exist ${exsitingUser}`)
    }
    const newUser = await User.create(req.body);
    res.status(201).json(newUser); 
  } catch (error) {
    res.status(500).send(`Error creating user: Error ${error}`);
  }
});

app.delete("api/delete/user", async (req, res) => {
  try {
    const user = req.body;
    const exsitingUser = await User.findOneAndDelete({
      userEmail: user.userEmail,
    });
    return res.status(200).send("user deleted succesfully")
  } catch (error) {
    res.status(500).send(`Error deleting user: Error ${error}`);
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

//pass /api/user/example@email.com
app.get("/api/user/:email", async (req, res) => {
  const userEmail = req.params.email;
  try {
    const user = await User.findOne({ userEmail: userEmail });
    if (!user) {
      return res.status(404).send(`User not found: email: ${userEmail}`);
    }else{
    return res.status(409).json(user);}
  } catch (error) {
    res.status(500).send(`Error fetching user details: ${error}`);
  }
});

// EVENTS
app.post("/api/create/event", async (req, res) => {
  try {
    const {
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

app.delete("/api/delete/event:eventId",async(req,res)=>{
  try {
    const eventId = res.params.eventId
    const reqEvent = await Event.findOneAndDelete({eventId: eventId})
    res.status(200).send(`Event deleted event ID = ${eventId}`)
  } catch (error) {
    res.status(500).send(`error deleting event=> error = ${error}`)
  }
})
// to get all events
app.get("/api/allEvents", async (req, res) => {
  try {
    const events = await Event.find();
    // const numberOfEvents = await Event.countDocuments();
    // res.json({ numberOfEvents, events });
    res.json(events);
  } catch (error) {
    res.status(500).send(`Error fetching event details: ${error}`);
  }
});

// Team Registration
app.post("/api/team-registration/event", async (req, res) => {
  try {
    // const leader = req.params.email;
    // const leader = req.headers.user_email;
    const { eventId,leader, additionalDetails } = req.body;
    if (eventId.length !== additionalDetails.length) {
      return res
        .status(400)
        .send("eventId and additionalDetails array length should be the same");
    }

    const user = await User.find({ userEmail: leader });
    if (!user) {
      return res
        .status(404)
        .send(`User is not registered: Email: ${leader}, Event: ${eventId}`);
    }
    // const isParticipated = await Participants.find({eventId:{$eq : reqEvent}, teamId:{$eq : reqTeam}, participantEmail: {$eq : reqUser}});

    const registrations = [];
    for (let i = 0; i < eventId.length; i++) {
      const event = await Event.findOne({ eventId: eventId[i] });
      if (!event) {
        return res.status(408).send(`Event is not registered: Email: ${event}`);
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
      await Participants.create({
        eventId: event.eventId,
        teamId: teamId,
        participantEmail: leader,
      });
    }
    const createdRegistrations = await RegisteredTeam.insertMany(registrations);
    res.status(201).json({
      total_event_registered: registrations.length,
      createdRegistrations,
    });
  } catch (error) {
    res.status(500).send(`Error regitring team=> error: ${error}`);
  }
});
app.delete("/api/delete/team:teamId",async(req,res)=>{
  try {
    const teamId = res.params.teamId
    const reqEvent = await RegisteredTeam.findOneAndDelete({teamId: teamId})
    res.status(200).send(`Team deleted teaam ID = ${teamId}`)
  } catch (error) {
    res.status(500).send(`error deleting team=> error = ${error}`)
  }
})

app.get("/api/allTeams", async (req, res) => {
  try {
    const registeredTeam = await RegisteredTeam.find();
    const totalRegisteredTeam = await RegisteredTeam.countDocuments();
    res.json({ totalRegisteredTeam, registeredTeam });
  } catch (error) {
    res.status(500).send(`Error fetching registered team details : ${error}`);
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
      return res.status(404).send(`Team is not registered: Team-id: ${teamId}`);
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
    res
      .status(500)
      .send(
        `Error registering user ${participantEmail} with team ${teamId} \nerror: ${error}`
      );
  }
});
app.delete("/api/delete/participants:participantId",async(req,res)=>{
  try {
    const participantId = res.params.participantId
    const reqEvent = await Participants.findOneAndDelete({participantEmail: participantId})
    res.status(200).send(`Participant deleted participant ID = ${eventId}`)
  } catch (error) {
    res.status(500).send(`error deleting participant=> error = ${error}`)
  }
})

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

// Invitation
app.post("/api/create/team-invite", async (req, res) => {
  const { teamId, inviterEmail, inviteeEmail } = req.body;
  try {
    // const event = await Event.findOne({ eventId: eventId });
    // if (!event) {
    //   return res.status(404).send(`Event is not registered: Event-id: ${eventId}`);
    // }
    const team = await RegisteredTeam.findOne({ teamId: teamId });
    if (!team) {
      return res.status(404).send(`Team is not registered: Team-id: ${teamId}`);
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
    const isInvited = await Invitation.findOne({
      teamId: { $eq: teamId },
      inviterEmail: { $eq: inviterEmail },
      inviteeEmail: { $eq: inviteeEmail },
    });
    if (isInvited) {
      if (isInvited.status === "pending") {
        return res
          .status(409)
          .json(
            `User: ${inviteeEmail} already invited to join team: ${teamId}`
          );
      } else if (isInvited.status === "rejected") {
        return res
          .status(409)
          .json(
            `User: ${inviteeEmail} have rejected invitation to join team: ${teamId}`
          );
      }
      {
        return res
          .status(409)
          .json(`User: ${inviteeEmail} has joined different team`);
      }
    }
    const hasJoined = await Participants.findOne({
      eventId: team.eventId,
      participantEmail: inviteeEmail,
    });
    if (hasJoined) {
      return res
        .status(409)
        .json(
          `User: ${inviteeEmail} has joined different team for ${team.eventId}`
        );
    }
    const invitation = await Invitation.create({
      eventId: team.eventId,
      teamId,
      inviterEmail,
      inviteeEmail,
    });
    console.log(invitation);
    const sendMail = await mailer(invitation.inviteeEmail, teamId);
    res.status(201).json(invitation);
  } catch (error) {
    res
      .status(500)
      .send(
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
    if (acceptedInvite) {
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
      return res.status(404).send("Invitation not found");
    }
  } catch (error) {
    res
      .status(500)
      .send(
        `Error responding user ${inviterEmail} invitation for ${teamId}\nerror: ${error}`
      );
  }
});

app.get("/api/event/invitations/:email", async (req, res) => {
  const request = req.params.email;
  try {
    const invitation = await Invitation.find({ inviteeEmail: request });
    const totalInvitation = await Invitation.countDocuments({
      inviteeEmail: request,
    });
    res.json({ totalInvitation, invitation });
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
  const first5Chars = fooName.substring(0, 5);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const currentDay = currentDate.getDate().toString().padStart(2, "0");
  const currentHour = currentDate.getHours().toString().padStart(2, "0");
  const currentMinute = currentDate.getMinutes().toString().padStart(2, "0");
  const currentSecond = currentDate.getSeconds().toString().padStart(2, "0");

  // Use type in the ID if needed
  const typeId = type ? `${type}-` : "";

  const fooId = `${first5Chars}-${currentYear}${currentMonth}${currentDay}-${currentHour}${currentMinute}${currentSecond}`;

  return `${typeId}${fooId}`;
}

function generateTeamId(EventName, leader) {
  const EventNameChars = EventName.substring(0, 7);
  // const leaderChars = EventId.substring(0, 7);

  // Use type in the ID if needed
  // const typeId = type ? `${type}-` : '';

  const fooId = `${EventNameChars}-${leader}`;

  return `team-${fooId}`;
}

function generateInvitationId(EventName, leader) {
  const EventNameChars = EventName.substring(0, 7);
  // const leaderChars = EventId.substring(0, 7);

  // Use type in the ID if needed
  // const typeId = type ? `${type}-` : '';

  const fooId = `team-invite-${EventNameChars}-${leader}`;

  return fooId;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const server = app.listen(PORT, IP, () => {
//   console.log(`Server is running at http://${IP}:${PORT}`);
// });
