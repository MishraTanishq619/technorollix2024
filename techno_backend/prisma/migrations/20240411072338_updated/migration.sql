/*
  Warnings:

  - Made the column `eventId` on table `Invitation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `teamId` on table `Invitation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `inviterEmail` on table `Invitation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `inviteeEmail` on table `Invitation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Invitation` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Invitation" ALTER COLUMN "eventId" SET NOT NULL,
ALTER COLUMN "teamId" SET NOT NULL,
ALTER COLUMN "inviterEmail" SET NOT NULL,
ALTER COLUMN "inviteeEmail" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;
