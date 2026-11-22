import 'dotenv/config'
import { cleanEnv, str, url } from 'envalid'

export const env = cleanEnv( process.env, {
  DATABASE_URL: str( {
    desc: 'PostgreSQL connection string',
    example:
      'DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"',
    docs: 'https://www.prisma.io/docs/v7/prisma-orm/quickstart/postgresql',
  } ),
  BETTER_AUTH_SECRET: str( {
    desc: 'A secret value used for encryption and hashing. It must be at least 32 characters and generated with high entropy.',
    docs: 'https://better-auth.com/docs/installation',
  } ),
  BETTER_AUTH_URL: url( {
    desc: 'Base URL of your app',
    example: 'http://localhost:3000',
    docs: 'https://better-auth.com/docs/installation',
  } ),
} )
