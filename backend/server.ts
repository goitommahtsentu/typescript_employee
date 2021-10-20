import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./config/database";
import employeeRouters from "./routes/employeRouter";
dotenv.config()
connectDB()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())


// routes

app.get('/api',(req,res)=>{
    res.send('api is running ..... on')
})
app.use('/api/employee',employeeRouters)
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    }
)
