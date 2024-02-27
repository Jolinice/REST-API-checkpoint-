require('dotenv').config()

const express = require("express");
const mongoose  = require("mongoose");
const app = express();
mongoose.connect = ""

mongoose.Connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (err) => console.error(err))
db.once("open", () => console.log("Connected to DB"))
app.listen(3000, () => console.log("Server Started"));