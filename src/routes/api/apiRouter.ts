import { Router } from "express";

import contentRouter from "./contentRouter.ts";
import imageRouter from "./imageRouter.ts";
import userRouter from "./userRouter.ts";

const apiRouter = Router()

apiRouter.use("/content", contentRouter)
apiRouter.use("/image", imageRouter)
apiRouter.use("/user", userRouter)

export default apiRouter