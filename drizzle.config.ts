import { defineConfig } from 'drizzle-kit';

const databasePort = process.env.DATABASE_PORT;
const databaseHost = process.env.DATABASE_HOST;
const databaseUser = process.env.DATABASE_USER;
const databaseName = process.env.DATABASE_NAME;
const databasePassword = process.env.DATABASE_PASSWORD;

const config = defineConfig({
  out: './drizzle',
  schema: './src/database/schemas/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: `postgres://${databaseUser}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`,
  },
});

export default config;
