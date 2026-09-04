import { eq } from "drizzle-orm";
import { db, pageTable } from "../db/schema.ts";
import { page } from "../models/page.ts";

// find all page
export const findAll = async (req: Request, res: Response) => {
    const blogs = await db.select().from(pageTable)
}

// find page by id
export const findByID = async (id: number) => {
    const blog = await db.select().from(pageTable).where(eq(pageTable.id, id))
}

// create new page post
export const create = async (p: page) => {
    const blog = await db.insert(pageTable).values(p).returning()
}

// update page by id
export const updateByID = async (id: number, p: page) => {
    const blog = await db.update(pageTable).set(p).where(eq(pageTable.id, id)).returning()
}

// delete page post by id
export const deleteByID = async (id: number) => {
    const blog = await db.delete(pageTable).where(eq(pageTable.id, id)).returning()
}
