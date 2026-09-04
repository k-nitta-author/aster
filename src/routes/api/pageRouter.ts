import { Router } from "express";
import { db, pageTable } from "../../db/schema.ts";
import { eq } from "drizzle-orm/pg-core/expressions";

const pageRouter = Router()

pageRouter.get("/", async (req, res) => {
    const pages = await db
    .select()
    .from(pageTable)

    res.status(200).json(pages)
})

pageRouter.get("/:id", async (req, res) => {
    const page = await db.select()
    .from(pageTable)
    .where(eq(pageTable.id, +req.params.id))

    res.status(200).json(page)
})

pageRouter.post("/", async (req, res) => {
    const page = await db
    .insert(pageTable)
    .values(req.body)
    .returning()

    res.status(201).json(page)
})

pageRouter.put("/:id", async (req, res) => {
    const page = await db
    .update(pageTable)
    .set(req.body)
    .where(eq(pageTable.id, +req.params.id))
    .returning()

    res.status(200).json(page)
})

pageRouter.delete("/:id", async (req, res) => {
    const page = await db
    .delete(pageTable)
    .where(eq(pageTable.id, +req.params.id))

    res.status(204).json(page)
})

export default pageRouter