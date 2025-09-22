import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import agriRouter from "./routes/agriRoute.js"



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection 
connectDB();

// api endpoints
app.use("/api/agri",agriRouter)

app.get("/",(req,res)=>{
  res.send("API Working")
})


app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://huynhtranainu_db_user:PU4yvKmGKiWX83N0@cluster0.a281lm4.mongodb.net/?