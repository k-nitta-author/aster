import { eq } from "drizzle-orm";
import { db, pageTable } from "../db/schema.ts";
import { page } from "../models/page.ts";

// find all newsposts
export const findAll = async (req: Request, res: Response) => {
    const blogs = await db.select().from(pageTable)
}

// find news by id
export const findByID = async (id: number) => {
    const blog = await db.select().from(pageTable).where(eq(pageTable.id, id))
}

// create new news post
export const create = async (p: page) => {
    const blog = await db.insert(pageTable).values(p).returning()
}

// update news by id
export const updateByID = async (id: number, p: page) => {
    const blog = await db.update(pageTable).set(p).where(eq(pageTable.id, id)).returning()
}

// delete news post by id
export const deleteByID = async (id: number) => {
    const blog = await db.delete(pageTable).where(eq(pageTable.id, id)).returning()
}
