const mongoose = require("mongoose");
const schema=new mongoose.Schema({
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String
    },
    city:{
        type:String
    },
    timeStamp:{
        type:Number
    }

})

const userdetails=new mongoose.model("userdetails",schema);


module.exports=userdetails;