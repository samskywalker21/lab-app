import { prismaAdapter } from 'better-auth/adapters/prisma'
import { betterAuth } from 'better-auth/minimal'
import { username } from 'better-auth/plugins'
import { prisma } from './prisma'

export const auth = betterAuth( {
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 8,
  },
  database: prismaAdapter( prisma, {
    provider: 'postgresql',
  } ),
  user: {
    additionalFields: {
      firstName: {
        type: 'string',
        required: true,
      },
      lastName: {
        type: 'string',
        required: true,
      },
      role: {
        type: [ 'user', 'admin' ],
        required: false,
        defaultValue: 'user',
      },
    },
  },
  advanced: {
    database: {
      generateId: false,
      joins: true,
    },
  },
  plugins: [
    username( {
      displayUsername: false,
      minUsernameLength: 6,
    } ),
  ],
} )
