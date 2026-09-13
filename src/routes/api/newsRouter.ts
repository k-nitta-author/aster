import { Router } from "express";
import { create, deleteByID, findAll, findByID, updateByID } from "../../services/newsPostService.ts";

const newsRouter = Router()

newsRouter.get("/", (req, res) => {
    const newsPosts = findAll()

    res.status(200).json(newsPosts)
})

newsRouter.get("/:id", async (req, res) => {
    const newsPost = findByID(+req.params.id)

    res.status(200).json(newsPost)
})

newsRouter.post("/", async (req, res) => {
    const newsPost = create(req.body)

    res.status(200).json(newsPost)
})

newsRouter.put("/:id", async (req, res) => {
    const newsPost = updateByID(+req.params.id, req.body)

    res.status(201).json(newsPost)
})

newsRouter.delete("/:id", async (req, res) => {
    const newsPost = deleteByID(+req.params.id)

    res.status(204).json(newsPost)
})

export default newsRouter