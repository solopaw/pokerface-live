import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./lib/db/bin",
    schema:'./lib/db/schema',
    dialect: 'sqlite',
    
    });