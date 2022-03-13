const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const authRoutes = require("./routes/login");
const chatRoutes = require("./routes/chat");

app.use(bodyParser.urlencoded({extended: true}));

app.use("/login", authRoutes);
app.use("/chat", chatRoutes);


app.listen(3000);