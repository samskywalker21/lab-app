import { APIError } from 'better-auth'
import consola from 'consola'
import { auth } from '../utils/auth'
import { env } from '../utils/env'
import { prisma } from '../utils/prisma'

async function seedAdmin() {
  consola.start( 'Seeding administrator' )
  const ifExist = await prisma.user.findFirst( {
    where: {
      username: 'administrator',
    },
  } )

  if ( ifExist ) {
    consola.error( 'Administrator already exists' )
    return
  }

  try {
    await auth.api.signUpEmail( {
      body: {
        email: 'placeholder@email.com',
        firstName: 'Asa',
        lastName: 'Enami',
        name: 'Enami, Asa',
        username: 'administrator',
        role: 'admin',
        password: env.ADMIN_PASSWORD,
      },
    } )

    consola.success( 'Seeding administrator successful' )
    return
  } catch ( error ) {
    if ( error instanceof APIError ) {
      consola.error( error.message )
    }
    consola.error( error )
    return
  }
}

seedAdmin()
