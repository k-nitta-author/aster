import { Router } from "express";
import { blogPostTable, db } from "../../db/schema.ts";
import { eq } from "drizzle-orm";


const blogRouter = Router()

blogRouter.get("/", (req, res) => {
    const blogPosts = db
    .select()
    .from(blogPostTable)

    res.status(200).json(blogPosts)
})

blogRouter.get("/:id", async (req, res) => {
    const blogPost = db
    .select()
    .from(blogPostTable)
    .where(eq(blogPostTable.id, +req.params.id))
    
    res.status(200).json(blogPost)
})

blogRouter.post("/", (req, res) => {
    const blogPost = db
    .insert(blogPostTable)
    .values(req.body)
    .returning()

    res.status(201).json(blogPost)
})

blogRouter.put("/:id", (req, res) => {
    const blogPost = db
    .update(blogPostTable)
    .set({})
    .where(eq(blogPostTable.id, +req.params.id))

    res.status(201).json(blogPost)
})

blogRouter.delete("/:id", (req, res) => {
    const blogPost = db
    .delete(blogPostTable)
    .where(eq(blogPostTable.id, +req.params.id))

    res.status(201).json("deleted blog post")
})

export default blogRouter