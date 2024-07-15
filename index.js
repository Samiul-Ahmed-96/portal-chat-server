import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";


dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin:[process.env.ORIGIN],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());

const server = app.listen(port,()=>{
    console.log(`Server running at ${port}`)
})

mongoose.connect(databaseURL)
.then(()=> console.log("DB Connected"))
.catch((err)=>console.log(err.message))