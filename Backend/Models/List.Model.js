const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
    title:{type:String, required:true},
    items:{type:Array, required:true}
    },
    {versionKey:false}
    );
    
    const ListModel = mongoose.model("list", listSchema);
    
    module.exports = {ListModel}