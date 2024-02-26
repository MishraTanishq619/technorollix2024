const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


// Define User Schema
// POST, GET, PUT
const userSchema = new mongoose.Schema({
  userEmail: { type: String, unique: true},
  userName: String,
  userPic: String,
  userPhoneNumber: String,
  userUniversity: String,
  isUserOPJUStudent: Boolean,
  userAddress: {
    district: String,
    state: String,
    pincode: Number,
  },
  userGender: String
});
const User = mongoose.model('User', userSchema);



// Define Event Schema
// GET
const eventSchema = new mongoose.Schema({
  eventId: { type: String, required: true, unique: true },
  eventName: String,
  eventDescription: String,
  eventpic: String,
  teamSize: Number,
  priceMoney: Number,
  entryFee: Number,
});
const Event = mongoose.model('Event', eventSchema);





// Define Team Registration Schema
// POST, GET
const teamRegistrationSchema = new mongoose.Schema({
  eventId: { type: String, required: true},
  teamId: { type: String, required: true, unique: true },
  leader: { type: String, required: true},
  additionalDetails: String,
});
const RegisteredTeam = mongoose.model('RegisteredTeam', teamRegistrationSchema);



// Define Team Members Schema
// POST, GET, PUT, DELETE
// const teamMembersSchema = new mongoose.Schema({
//   teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'RegisteredTeam' },
//   userEmail: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//   eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
// });
// const TeamMembers = mongoose.model('TeamMembers', teamMembersSchema);



// Define Confirmation Schema
// POST, GET,
const participantsSchema = new mongoose.Schema({
  eventId: String,
  teamId: String, // confirmed, declined, pending
  participantEmail: String,
});
const Participants = mongoose.model('Participants', participantsSchema);



// Define Invitation Schema
// POST, GET, PUT, DELETE
const invitationSchema = new mongoose.Schema({
  invitationId: { type: String, required: true, unique: true },
  eventId: String,
  teamId: String,
  inviterEmail: String,
  inviteeEmail: String,
  status: { type: String, default: 'pending' } // pending, accepted, rejected
});
const Invitation = mongoose.model('Invitation', invitationSchema);


module.exports = {
  User,
  Event,
  RegisteredTeam,
  // TeamMembers,
  Participants,
  Invitation,
};
