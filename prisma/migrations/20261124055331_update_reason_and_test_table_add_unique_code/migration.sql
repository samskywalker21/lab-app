/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `reasons` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `tests` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "reasons_code_key" ON "reasons"("code");

-- CreateIndex
CREATE UNIQUE INDEX "tests_code_key" ON "tests"("code");
