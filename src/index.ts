import { configDotenv } from "dotenv";
import Express from "express";

// the project's routes
import apiRouter from "./routes/api/apiRouter.ts";
import bodyParser from "body-parser";

// set up the dotenv
configDotenv()

const PORT_NO = process.env.PORT_NUMBER

// start up the app
const app = Express()

// use each route

app.use(bodyParser.json())
app.use("/api", apiRouter)

app.use(Express.json())
app.use("/", Express.static('public'))

// listen on this port
app.listen(PORT_NO)