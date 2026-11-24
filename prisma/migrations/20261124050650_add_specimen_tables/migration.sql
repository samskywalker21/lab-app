-- CreateEnum
CREATE TYPE "History" AS ENUM ('new', 'ret');

-- CreateEnum
CREATE TYPE "SpecimenStatus" AS ENUM ('accepted', 'rejected', 'onhold');

-- CreateTable
CREATE TABLE "facilities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "facilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reasons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "reasons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tests" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specimens" (
    "id" SERIAL NOT NULL,
    "serial" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "facilityId" INTEGER NOT NULL,
    "history" "History" NOT NULL DEFAULT 'new',
    "reasonId" INTEGER NOT NULL,
    "consistency" TEXT,
    "volume" TEXT,
    "dateCollected" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateReceived" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "SpecimenStatus",
    "loggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "loggedById" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT NOT NULL,

    CONSTRAINT "specimens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specimen_tests" (
    "specimenId" INTEGER NOT NULL,
    "testId" INTEGER NOT NULL,
    "dateReleased" TIMESTAMP(3),
    "releasedById" TEXT,
    "loggedById" TEXT NOT NULL,
    "status" TEXT,
    "result" TEXT,

    CONSTRAINT "specimen_tests_pkey" PRIMARY KEY ("specimenId","testId")
);

-- CreateIndex
CREATE UNIQUE INDEX "facilities_name_key" ON "facilities"("name");

-- CreateIndex
CREATE INDEX "facilities_name_idx" ON "facilities"("name");

-- CreateIndex
CREATE INDEX "reasons_code_idx" ON "reasons"("code");

-- CreateIndex
CREATE INDEX "tests_code_idx" ON "tests"("code");

-- CreateIndex
CREATE UNIQUE INDEX "specimens_serial_key" ON "specimens"("serial");

-- AddForeignKey
ALTER TABLE "specimens" ADD CONSTRAINT "specimens_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specimens" ADD CONSTRAINT "specimens_reasonId_fkey" FOREIGN KEY ("reasonId") REFERENCES "reasons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specimens" ADD CONSTRAINT "specimens_loggedById_fkey" FOREIGN KEY ("loggedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specimens" ADD CONSTRAINT "specimens_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specimen_tests" ADD CONSTRAINT "specimen_tests_specimenId_fkey" FOREIGN KEY ("specimenId") REFERENCES "specimens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specimen_tests" ADD CONSTRAINT "specimen_tests_testId_fkey" FOREIGN KEY ("testId") REFERENCES "tests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specimen_tests" ADD CONSTRAINT "specimen_tests_releasedById_fkey" FOREIGN KEY ("releasedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specimen_tests" ADD CONSTRAINT "specimen_tests_loggedById_fkey" FOREIGN KEY ("loggedById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
