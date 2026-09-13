import { Router } from "express";
import { db, pageTable } from "../../db/schema.ts";
import { eq } from "drizzle-orm/pg-core/expressions";
import ejs from 'ejs';
import { create, deleteByID, findAll, findByID, updateByID } from "../../services/pageService.ts";
import { Request, Response } from "express";

const pageRouter = Router()


pageRouter.get("/new", async (req, res) =>{
    const page = await db.select()
    .from(pageTable)
    .orderBy(pageTable.publishDate)
    .limit(1)

    res.status(200).json(page)
})

pageRouter.get("/", async (req: Request, res: Response) => {
    const pages = findAll()

    res.status(200).json(pages)
})

pageRouter.get("/:id", async (req, res) => {
    const page = findByID(+req.params.id)

    res.status(200).json(page)
})

pageRouter.post("/", async (req, res) => {
    const page = create(req.body)

    res.status(201).json(page)
})

pageRouter.put("/:id", async (req, res) => {
    const page = updateByID(+req.params.id, req.body)

    res.status(200).json(page)
})

pageRouter.delete("/:id", async (req, res) => {
    const page = deleteByID(+req.params.id)

    res.status(204).json(page)
})

export default pageRouter