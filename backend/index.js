import express from 'express'
import router from './routes/auth.routes.js'
import connectDb from './db/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'
import listingRouter from './routes/listing.route.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())
app.use(cors({

    origin: "http://localhost:5173",
    credentials: true
}))

// app.get("/", (req, res)=>{
//     res.send("kuchh message")
// })

app.use("/api/auth", router)
app.use("/api/user", userRouter)
app.use("/api/listing", listingRouter)

app.listen(port, async()=>{
   await connectDb()
    console.log(`Server is running on port ${port}`);
    
})

export default express