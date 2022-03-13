const express = require("express");
const fs = require("fs");
const router = express.Router();
const data = require("./data");

router.get("/", (req, res, next) => {
    res.send(`<form action="/chat" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
    method="POST"><input id="message" type="text" name="message" ><input type="hidden" name="username" id="username"><button type="submit">Send</button></form>`)
})

router.post("/", (req, res, next) => {
    data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(data);
    res.redirect(`/chat`)
})

module.exports = router;