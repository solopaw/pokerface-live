import 'dotenv/config';

import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./lib/db/bin",
    schema:'./lib/db/schema/*',
    dialect: 'sqlite',
    dbCredentials: {
        url: process.env.DATABASE_URL ?? 'main.db',
        },
    });