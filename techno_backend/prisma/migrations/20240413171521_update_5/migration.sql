/*
  Warnings:

  - Made the column `district` on table `UserAddress` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `UserAddress` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pincode` on table `UserAddress` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserAddress" ALTER COLUMN "district" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "pincode" SET NOT NULL;
