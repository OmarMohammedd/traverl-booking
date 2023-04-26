import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import tourRoute from "./routes/tours.js"
import userRoute from "./routes/user.js"
import authRouter from "./routes/auth.js"
import reviewRoute from "./routes/reviews.js"
import bookingRoute from "./routes/booking.js"




   // dotenv == file .env
   dotenv.config()
   const app = express()
   const port = process.env.PORT || 8000
   const corsOptions = {
    origin: true,
    credentials: true
   }
   

// connect database 
mongoose.set("strictQuery", false)
const connect = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URL , {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
        console.log(`http://localhost:${port}`)
  } catch (err) {
    console.log(err)
  }
}


// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/tours", tourRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/review", reviewRoute)
app.use("/api/v1/booking", bookingRoute)


app.listen(port, () => {
   connect()
   console.log("object" , port)
})

