import { configDotenv } from "dotenv";
import Express, { Router } from "express";

// the project's routes
import userRouter from "./routes/userRouter";
import contentRouter from "./routes/contentRouter";
import imageRouter from "./routes/imageRouter";

// set up the dotenv
configDotenv()

const PORT_NO = process.env.PORT_NUMBER

// start up the app
const app = Express()

// use each route
app.use("/user", userRouter)
app.use("/content", contentRouter)
app.use("/image", imageRouter)

// listen on this port
app.listen(PORT_NO)