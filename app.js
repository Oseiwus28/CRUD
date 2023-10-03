const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const userRoute = require('./userRoutes')
const port = process.env.port
const app = express()

const dbConnect = require("./database/dbConnect")

app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static(__dirname+"/js"))

app.use('/',userRoute)

app.get("/tester",(req,res)=>{
    res.send("axios is working")
})

app.listen(port,async(req,res)=>{
    await dbConnect.authenticate();
    console.log(`server started on http://localhost:${port}`);
})