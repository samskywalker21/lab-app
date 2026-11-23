# Lab App

A Nuxt 4 app with username/password authentication ([Better Auth](https://better-auth.com)), a PostgreSQL database ([Prisma 7](https://www.prisma.io)), and UI built with [Nuxt UI](https://ui.nuxt.com) and Tailwind CSS.

## Stack

- **Framework:** Nuxt 4, Vue 3
- **UI:** Nuxt UI, Tailwind CSS 4
- **Auth:** Better Auth (email + password, `username` plugin)
- **Database:** PostgreSQL via Prisma (`@prisma/adapter-pg`)
- **Tooling:** pnpm, Biome, TypeScript, tsx

## Prerequisites

- Node.js
- pnpm
- A running PostgreSQL database

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy the example environment file and fill it in:

   ```bash
   cp .env.example .env
   ```

   | Variable             | Description                                                        |
   | -------------------- | ------------------------------------------------------------------ |
   | `DATABASE_URL`       | PostgreSQL connection string                                       |
   | `BETTER_AUTH_SECRET` | Secret for encryption and hashing (at least 32 high-entropy chars) |
   | `BETTER_AUTH_URL`    | Base URL of the app, e.g. `http://localhost:3000`                  |
   | `ADMIN_PASSWORD`     | Initial password for the seeded administrator account              |

   Variables are validated at startup in [server/utils/env.ts](server/utils/env.ts).

3. Apply database migrations and generate the Prisma client:

   ```bash
   pnpm prisma migrate deploy --config prisma7.config.ts
   pnpm prisma generate --config prisma7.config.ts
   ```

   During development, use `pnpm prisma migrate dev --config prisma7.config.ts` to create new migrations after editing [prisma/schema.prisma](prisma/schema.prisma).

4. Seed the administrator account:

   ```bash
   pnpm tsx server/scripts/seed-admin.ts
   ```

   This creates a user with the username `administrator` (role `admin`). The password comes from `ADMIN_PASSWORD`. The script does nothing if the user already exists.

## Development

Start the dev server on `http://localhost:3000`:

```bash
pnpm dev
```

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `pnpm dev`      | Start the development server |
| `pnpm build`    | Build for production         |
| `pnpm preview`  | Preview the production build |
| `pnpm generate` | Generate a static site       |
| `pnpm lint`     | Check the code with Biome    |
| `pnpm format`   | Format the code with Biome   |

## Project Structure

```text
app/                Nuxt frontend (pages, utils, auth client)
server/utils/       Server helpers: auth, env, Prisma client
server/scripts/     One-off scripts (e.g. seed-admin.ts)
prisma/             Schema and migrations
generated/prisma/   Generated Prisma client
```

## Authentication

Users sign in with a **username** and password. Usernames must be at least 6 characters. Users have a `role` of `user` or `admin`, plus `firstName` and `lastName` fields. Server config lives in [server/utils/auth.ts](server/utils/auth.ts) and the client in [app/utils/auth-client.ts](app/utils/auth-client.ts).

## Deployment

See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment). Run `prisma migrate deploy` against the production database before starting the app.
