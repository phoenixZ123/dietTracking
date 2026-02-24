/*
  Warnings:

  - You are about to drop the column `weightKg` on the `WeightLog` table. All the data in the column will be lost.
  - Added the required column `weightLb` to the `WeightLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WeightLog" DROP COLUMN "weightKg",
ADD COLUMN     "weightLb" DOUBLE PRECISION NOT NULL;
