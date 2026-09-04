import { Router } from "express";

import contentRouter from "./contentRouter.ts";
import imageRouter from "./imageRouter.ts";
import userRouter from "./userRouter.ts";
import blogRouter from "./blogRouter.ts"
import newsRouter from "./newsRouter.ts"
import pageRouter from "./pageRouter.ts"

// initialize router
const apiRouter = Router()

// set apirouter to use 
apiRouter.use("/content", contentRouter)
apiRouter.use("/image", imageRouter)
apiRouter.use("/user", userRouter)
apiRouter.use("/blog", blogRouter)
apiRouter.use("/news", newsRouter)
apiRouter.use("/page", pageRouter)

export default apiRouter