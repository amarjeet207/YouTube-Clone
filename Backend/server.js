import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();


// app created
const app = express();
app.listen(3000, () => {
    console.log("Server running at port 3000");
});


// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI )
const db = mongoose.connection;

db.on("open", () => {
  console.log("connection is successful");
});

db.on("error", () => {
  console.log("Error in DB connection");
});


