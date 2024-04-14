/*
  Warnings:

  - Made the column `teamSize` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "teamSize" SET NOT NULL,
ALTER COLUMN "teamSize" SET DEFAULT 1;
