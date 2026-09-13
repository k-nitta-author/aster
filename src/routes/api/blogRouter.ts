import { Router } from "express";
import { blogPostTable, db } from "../../db/schema.ts";
import { eq } from "drizzle-orm";
import { create, deleteByID, findAll, findByID, updateByID } from "../../services/blogPostService.ts";

const blogRouter = Router()

blogRouter.get("/", (req, res) => {
    const blogPosts = findAll()

    res.status(200).json(blogPosts)
})

blogRouter.get("/:id", async (req, res) => {
    const blogPost = findByID(+req.params.id)

    res.status(200).json(blogPost)
})

blogRouter.post("/", (req, res) => {
    const blogPost = create(req.body)

    res.status(201).json(blogPost)
})

blogRouter.put("/:id", (req, res) => {
    const blogPost = updateByID(+req.params.id, req.body)

    res.status(200).json(blogPost)
})

blogRouter.delete("/:id", (req, res) => {
    const blogPost = deleteByID(+req.params.id)

    res.status(204).json("deleted blog post")
})

export default blogRouter