const express = require("express");
const {ListModel} = require("../Models/List.Model");

const ListRouter = express.Router()

ListRouter.get("/get",async(req,res)=>{
    try {
        const data = await ListModel.find();
        res.send(data)
     } catch (error) {
         res.send({"msg":error})
     }
})

module.exports = {ListRouter}