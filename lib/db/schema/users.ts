import { integer, sqliteTable,text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
export const users = sqliteTable('users', { 
    id: integer('id').primaryKey({autoIncrement: true}).notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    name: text('name').notNull(),
    username: text('username').notNull().unique(),
    created_at: integer('created_at',{mode:'timestamp'}).default(sql`(current_timestamp)`),
    updated_at: integer('updated_at',{mode:'timestamp'}).default(sql`(current_timestamp)`),
    }
)