const express = require("express");
const {connection} = require("./db");
const {UserRouter} = require("./Routes/User.route");
const {ListRouter} = require("./Routes/list.route");
var cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors({origin:'*'}))

app.use("/user" , UserRouter)
app.use("/list" , ListRouter)

app.use("/",(req,res)=>{
    res.send("Homepage")
})



app.listen(5000, async()=>{
    try {
       await connection 
       console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log("server running at port 5000")
})