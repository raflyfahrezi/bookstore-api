import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

import { postgresDatabaseURL } from '@/constants';

const pool = new Pool({
  connectionString: postgresDatabaseURL,
});

const db = drizzle(pool);

export { db };
export * from './schemas';
