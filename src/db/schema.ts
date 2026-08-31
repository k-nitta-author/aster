// the schema for this project
import { configDotenv } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { integer, varchar, pgTable, date } from "drizzle-orm/pg-core";

configDotenv()

// connect to the db
const db = drizzle(process.env.DATABASE_URL!)

// create users role table
export const userRoleTable = pgTable("user_role", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({length: 16}).notNull().unique()
})

// create tables
export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    firstName: varchar({length: 20}).notNull(),
    lastName: varchar({length: 25}).notNull(),
    userName: varchar({length: 25}).notNull().unique(),
    passWord: varchar({length: 25}).notNull(),
    joinDate: date(),
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
    name: varchar({length: 25}).notNull().unique(),
    body: varchar({length:1600}),
    publishDate: date(),
    editDate: date(),
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
    title: varchar({length: 30}).unique(),
    publishDate: date(),
    editDate: date(),
    body: varchar({length: 2000})
})