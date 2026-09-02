import { eq } from "drizzle-orm";
import { db, usersTable } from "../db/schema.ts";
import { user } from "../models/user.ts";


// find all users
export const findAll = async (req: Request, res: Response) => {
    const users = await db.select().from(usersTable)
}

// find user by id
export const findByID = async (id: number) => {
    const users = await db.select().from(usersTable).where(eq(usersTable.id, id))
}

// create new user
export const create = async (u: user) => {
    const user = await db.insert(usersTable).values(u).returning()
}

// update user by id
export const updateByID = async (id: number, u: user) => {
    const user = await db.update(usersTable).set(u).where(eq(usersTable.id, id)).returning()
}

// delete user by id
export const deleteByID = async (id: number) => {
    const user = await db.delete(usersTable).where(eq(usersTable.id, id)).returning()
}
