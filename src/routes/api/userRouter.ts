import { Router } from "express";
import { db, usersTable } from "../../db/schema.ts";
import { eq } from "drizzle-orm";
import ejs from 'ejs';
import { create, deleteByID, findAll, findByID, updateByID } from "../../services/userService.ts";

const userRouter = Router()

userRouter.get("/", async (req, res) => {
    const users = findAll()

    const html = ejs.render(
        `<table>
            <thead>
            <tr>
                <td>firstName</td>
                <td>lastName</td>
                <td>joinDate</td>
                <td>about</td>
                <td>roleId</td>
            </tr>
            </thead>
            <% for(var i = 0; i < users.length; i++) { %>
                <tr>
                    <td><%=users[i].firstName %></td>
                    <td><%=users[i].lastName %></td>
                    <td><%=users[i].joinDate %></td>
                    <td><%=users[i].about %></td>
                    <td><%=users[i].roleId %></td>
                </td>
            <% } %>
        </table>`
    , {users: users})

    res.status(200).json(html)
})

userRouter.get("/:id", async (req, res) => {
    const user = findByID(+req.params.id)

    const html = ejs.render(
        `<section>
            <p><%=user.firstName%></p>
            <p><%=user.lastName%></p>
            <p><%=user.joinDate%></p>
            <p><%=user.about%></p>
            <p><%=user.roleId%></p>
        </section>`
    , {user:user})

    res.status(201).json(html)
})

userRouter.post("/", async (req, res) => {
    const user = create(req.body)

    const html = ejs.render(
        `<section>
            <p><%=user.firstName%></p>
            <p><%=user.lastName%></p>
            <p><%=user.joinDate%></p>
            <p><%=user.about%></p>
            <p><%=user.roleId%></p>
        </section>`
    , {user:user})


    res.status(201).json(html)
})

userRouter.put("/:id", (req, res) => {
    const user = updateByID(+req.params.id, req.body)

    const html = ejs.render(
        `<section>
            <p><%=user.firstName%></p>
            <p><%=user.lastName%></p>
            <p><%=user.joinDate%></p>
            <p><%=user.about%></p>
            <p><%=user.roleId%></p>
        </section>`
    , {user:user})

    res.status(200).json(html)
})

userRouter.delete("/:id", (req, res) => {
    const user = deleteByID(+req.params.id)

    const html = `<section>This User has been Deleted</section>`

    res.status(204).json("deleted user")
})

export default userRouter