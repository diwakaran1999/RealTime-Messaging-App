const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
    res.send("API is Running Successfully Mate");
});

app.get("/api/chats", (req, res) => {
    res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 6900

app.listen(6900, console.log(`Server Started on PORT ${PORT}`.yellow.bold));