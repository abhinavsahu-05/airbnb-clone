import express, { Router } from "express"
import { getCurrentUser } from "../controllers/user.controller.js"
import isAuth from "../middlewares/isAuth.middleware.js"


let userRouter = express(Router())

userRouter.get("/currentuser", isAuth, getCurrentUser)

export default userRouter