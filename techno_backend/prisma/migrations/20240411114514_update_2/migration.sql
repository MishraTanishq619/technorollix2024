/*
  Warnings:

  - Made the column `eventName` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventDescription` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventpic` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventId` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `participantEmail` on table `Participant` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userPic` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userPhoneNumber` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userUniversity` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isUserOPJUStudent` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userGender` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "eventName" SET NOT NULL,
ALTER COLUMN "eventDescription" SET NOT NULL,
ALTER COLUMN "eventpic" SET NOT NULL;

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "eventId" SET NOT NULL,
ALTER COLUMN "teamId" SET NOT NULL,
ALTER COLUMN "participantEmail" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userName" SET NOT NULL,
ALTER COLUMN "userPic" SET NOT NULL,
ALTER COLUMN "userPhoneNumber" SET NOT NULL,
ALTER COLUMN "userUniversity" SET NOT NULL,
ALTER COLUMN "isUserOPJUStudent" SET NOT NULL,
ALTER COLUMN "userGender" SET NOT NULL;
