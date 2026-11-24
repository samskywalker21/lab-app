import { PrismaPg } from '@prisma/adapter-pg'
import { APIError } from 'better-auth'
import consola from 'consola'
import { Pool } from 'pg'
import { PrismaClient } from '../generated/prisma/client'
import { env } from '../server/utils/env'
import { facilitySeed, reasonSeed, testSeed } from './seed-data'

const connectionString = env.DATABASE_URL
const pool = new Pool( { connectionString } )
const adapter = new PrismaPg( pool )
const prisma = new PrismaClient( { adapter } )

async function main() {
  try {
    consola.start( 'Seeding facilities' )
    await prisma.facility.createMany( {
      data: facilitySeed,
      skipDuplicates: true,
    } )
    consola.success( 'Seeding facilities successful' )

    consola.start( 'Seeding reasons' )
    await prisma.reason.createMany( { data: reasonSeed, skipDuplicates: true } )
    consola.success( 'Seeding reasons successful' )

    consola.start( 'Seeding tests' )
    await prisma.test.createMany( { data: testSeed, skipDuplicates: true } )
    consola.success( 'Seeding tests successful' )
  } catch ( error ) {
    if ( error instanceof APIError ) {
      consola.error( 'Seeding failed ', error.message )
    } else {
      consola.error(
        'Seeding failed ',
        error instanceof Error ? error.message : String( error )
      )
    }
  }
}

main()
  .then( async () => {
    await prisma.$disconnect()
    await pool.end()
  } )
  .catch( async e => {
    console.error( e )
    await prisma.$disconnect()
    await pool.end()
    process.exit( 1 )
  } )
