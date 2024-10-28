import 'dotenv/config';

export const database = {
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  name: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
};

export const postgresDatabaseURL = `postgres://${database.user}:${database.password}@${database.host}:${database.port}/${database.name}`;
