import { eq } from "drizzle-orm";
import { db, newsPostTable } from "../db/schema.ts";
import { newsPost } from "../models/newsPost.ts";

// find the newest news post
export const findNewest = async () => {
    const newsPost = await db.select()
    .from(newsPostTable)
    .orderBy(newsPostTable.publishDate)
    .limit(1)
}

// find all newsposts
export const findAll = async () => {
    const newss = await db.select().from(newsPostTable)
}

// find news by id
export const findByID = async (id: number) => {
    const news = await db.select().from(newsPostTable).where(eq(newsPostTable.id, id))
}

// create new news post
export const create = async (n: newsPost) => {
    const news = await db.insert(newsPostTable).values(n).returning()
}

// update news by id
export const updateByID = async (id: number, n: newsPost) => {
    const news = await db.update(newsPostTable).set(n).where(eq(newsPostTable.id, id)).returning()
}

// delete news post by id
export const deleteByID = async (id: number) => {
    const news = await db.delete(newsPostTable).where(eq(newsPostTable.id, id)).returning()
}
