import express, { Router } from "express"
import isAuth from "../middlewares/isAuth.middleware.js"
import { cancelBooking, createBooking } from "../controllers/booking.controller.js"

const bookingRouter = express(Router())
bookingRouter.post("/create/:id", isAuth, createBooking)
bookingRouter.delete("/cancel/:id", isAuth, cancelBooking)

export default bookingRouter