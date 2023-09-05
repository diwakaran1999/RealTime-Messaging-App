const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleWare");

dotenv.config();
const app = express();
connectDB();

app.use(express.json());    //to accept json data

app.get("/", (req, res) => {
    res.send("API is Running Successfully Mate");
});

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 6900

app.listen(6900, console.log(`Server Started on PORT ${PORT}`.yellow.bold));