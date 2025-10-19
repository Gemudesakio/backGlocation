/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Proyecto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Proyecto" DROP COLUMN "creatorId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
