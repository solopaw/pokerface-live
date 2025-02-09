import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schemas from './schema';
const db = drizzle(process.env.DATABASE_URL,{schema:schemas});

export default db;