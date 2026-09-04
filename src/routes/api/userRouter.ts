import { Router } from "express";
import { db, usersTable } from "../../db/schema.ts";
import { eq } from "drizzle-orm";

const userRouter = Router()

userRouter.get("/", async (req, res) => {
    const users = await db
    .select()
    .from(usersTable)
    res.status(200).json(users)
})

userRouter.get("/:id", async (req, res) => {
    const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, +req.params.id))

    res.status(201).json(user)
})

userRouter.post("/", async (req, res) => {
    const user = await db
    .insert(usersTable)
    .values(req.body)
    .returning()

    res.status(201).json(user)
})

userRouter.put("/:id", (req, res) => {
    const user = db
    .update(usersTable)
    .set({})
    .where(eq(usersTable.id, +req.params.id))
    .returning()

    res.status(200).json(user)
})

userRouter.delete("/:id", (req, res) => {
    db
    .delete(usersTable)
    .where(eq(usersTable.id, +req.params.id))
    .returning()

    res.status(204).json("deleted user")
})

export default userRouter