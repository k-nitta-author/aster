// the schema for this project
import { configDotenv } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { integer, varchar, pgTable } from "drizzle-orm/pg-core";

configDotenv()

// connect to the db
const db = drizzle(process.env.DATABASE_URL!)

// create users role table
export const userRoleTable = pgTable("user_role", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length: 16})
})

// create tables
export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    firstName: varchar({length: 20}).notNull(),
    lastName: varchar({length: 25}).notNull(),
    about: varchar({length: 255}).notNull(),
    roleId: integer().references(() => userRoleTable.id) //  foreign key constraint; see user role
})

// news post authorship
export const newsPostAuthorShipTable = pgTable("news_post_authorship", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer().references(() => usersTable.id),
    newsPostId: integer().references(() => newsPostTable.id)
})

// create news post table
export const newsPostTable = pgTable("news_post", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length: 25}).notNull()
})

// create pageAuthorship table
export const pageAuthorshipTable = pgTable("page_authorship", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    authorId: integer().references(() => usersTable.id),
    pageId: integer().references(() => pageTable.id),

})

// create page table
export const pageTable = pgTable("page", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length: 25}).notNull()
})

// blog post authorship table
export const blogPostAuthorshipTable = pgTable("blog_post_authorship", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer().references(() => usersTable.id),
    blogPostId: integer().references(() => blogPostTable.id)
})

// create blog post table
export const blogPostTable = pgTable("blog_post", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({length: 30}),
    body: varchar({length: 2000})
})