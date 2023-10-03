const express = require ("express")

const {user, addUser} = require("./userController")

const app = express.Router()

app.get("/",user)

app.post("/addUser",addUser)

module.exports = app