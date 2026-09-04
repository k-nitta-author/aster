import { Router } from "express";
import { db, newsPostTable, usersTable } from "../../db/schema.ts";
import { eq } from "drizzle-orm";

const newsRouter = Router()

newsRouter.get("/", (req, res) => {
    const newsPosts = db.
    select().
    from(usersTable)

    res.status(200).json(newsPosts)
})

newsRouter.get("/:id", async (req, res) => {
    const newsPost = await db
    .select()
    .from(newsPostTable)
    .where(eq(newsPostTable.id, +req.params.id))

    res.status(200).json(newsPost)
})

newsRouter.post("/", async (req, res) => {
    const newsPost = await db
    .insert(newsPostTable)
    .values(req.body)
    .returning()

    res.status(200).json(newsPost)
})

newsRouter.put("/:id", async (req, res) => {
    const newsPost = await db
    .update(newsPostTable)
    .set({})
    .where(eq(newsPostTable.id, +req.params.id))
    .returning()

    res.status(201).json(newsPost)
})

newsRouter.delete("/:id", async (req, res) => {
    const newsPost = await db
    .delete(newsPostTable)
    .where(eq(newsPostTable.id, +req.params.id))
    .returning()

    res.status(204).json(newsPost)
})

export default newsRouter