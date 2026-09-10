import { eq } from "drizzle-orm";
import { db, pageTable } from "../db/schema.ts";
import { page } from "../models/page.ts";

// find newest page
export const findNewest = async () => {
    const page = await db.select()
    .from(pageTable)
    .orderBy(pageTable.publishDate)
    .limit(1)
}

// find all page
export const findAll = async () => {
    const pages = await db.select().from(pageTable)
}

// find page by id
export const findByID = async (id: number) => {
    const page = await db.select().from(pageTable).where(eq(pageTable.id, id))
}

// create new page post
export const create = async (p: page) => {
    const page = await db.insert(pageTable).values(p).returning()
}

// update page by id
export const updateByID = async (id: number, value: page) => {
    const page = await db.update(pageTable).set(value).where(eq(pageTable.id, id)).returning()
}

// delete page post by id
export const deleteByID = async (id: number) => {
    const page = await db.delete(pageTable).where(eq(pageTable.id, id)).returning()
}
