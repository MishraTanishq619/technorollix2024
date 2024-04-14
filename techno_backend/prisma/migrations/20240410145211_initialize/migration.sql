-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT,
    "userPic" TEXT,
    "userPhoneNumber" TEXT,
    "userUniversity" TEXT,
    "isUserOPJUStudent" BOOLEAN,
    "userGender" TEXT,
    "userAddressId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAddress" (
    "id" SERIAL NOT NULL,
    "district" TEXT,
    "state" TEXT,
    "pincode" INTEGER,

    CONSTRAINT "UserAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "mainEventId" VARCHAR(255) NOT NULL,
    "eventId" VARCHAR(255) NOT NULL,
    "eventName" TEXT,
    "eventDescription" TEXT,
    "eventpic" TEXT,
    "teamSize" INTEGER,
    "priceMoney" INTEGER,
    "entryFee" INTEGER,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegisteredTeam" (
    "id" SERIAL NOT NULL,
    "eventId" VARCHAR(255) NOT NULL,
    "teamId" VARCHAR(255) NOT NULL,
    "leader" VARCHAR(255) NOT NULL,
    "additionalDetails" TEXT,

    CONSTRAINT "RegisteredTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "eventId" VARCHAR(255),
    "teamId" VARCHAR(255),
    "participantEmail" VARCHAR(255),

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invitation" (
    "id" SERIAL NOT NULL,
    "invitationId" VARCHAR(255) NOT NULL,
    "eventId" VARCHAR(255),
    "teamId" VARCHAR(255),
    "inviterEmail" VARCHAR(255),
    "inviteeEmail" VARCHAR(255),
    "status" VARCHAR(255) DEFAULT 'pending',

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentReceipt" (
    "id" SERIAL NOT NULL,
    "userEmail" VARCHAR(255) NOT NULL,
    "paymentId" VARCHAR(255) NOT NULL,
    "numberOfEvents" INTEGER,
    "paidEntryFee" INTEGER NOT NULL,

    CONSTRAINT "PaymentReceipt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Event_eventId_key" ON "Event"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "RegisteredTeam_teamId_key" ON "RegisteredTeam"("teamId");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_eventId_participantEmail_key" ON "Participant"("eventId", "participantEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Invitation_invitationId_key" ON "Invitation"("invitationId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userAddressId_fkey" FOREIGN KEY ("userAddressId") REFERENCES "UserAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
