import { eq } from "drizzle-orm";
import { db, blogPostTable } from "../db/schema.ts";
import { blogPost } from "../models/blogPost.ts";


// find all blog
export const findAll = async (req: Request, res: Response) => {
    const blogs = await db.select().from(blogPostTable)
}

// find blog by id
export const findByID = async (id: number) => {
    const blog = await db.select().from(blogPostTable).where(eq(blogPostTable.id, id))
}

// create new blog
export const create = async (b: blogPost) => {
    const blog = await db.insert(blogPostTable).values(b).returning()
}

// update blog by id
export const updateByID = async (id: number, b: blogPost) => {
    const blog = await db.update(blogPostTable).set(b).where(eq(blogPostTable.id, id)).returning()
}

// delete blog by id
export const deleteByID = async (id: number) => {
    const blog = await db.delete(blogPostTable).where(eq(blogPostTable.id, id)).returning()
}
