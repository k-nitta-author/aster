import { eq } from "drizzle-orm";
import { db, newsPostTable } from "../db/schema.ts";
import { newsPost } from "../models/newsPost.ts";

// find all newsposts
export const findAll = async (req: Request, res: Response) => {
    const blogs = await db.select().from(newsPostTable)
}

// find news by id
export const findByID = async (id: number) => {
    const blog = await db.select().from(newsPostTable).where(eq(newsPostTable.id, id))
}

// create new news post
export const create = async (n: newsPost) => {
    const blog = await db.insert(newsPostTable).values(n).returning()
}

// update news by id
export const updateByID = async (id: number, n: newsPost) => {
    const blog = await db.update(newsPostTable).set(n).where(eq(newsPostTable.id, id)).returning()
}

// delete news post by id
export const deleteByID = async (id: number) => {
    const blog = await db.delete(newsPostTable).where(eq(newsPostTable.id, id)).returning()
}
