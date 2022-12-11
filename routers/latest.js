const express=require("express");
const router=express.Router();
const Schema=require("../models/schema");

router.get("/latestdetails",async(req,res)=>{
    try
    {
        const data=await Schema.find().sort({timeStamp:-1}).select({timeStamp:0});
        if(data==null)
        {
            res.json({status:"no data present"}).status(400);
        }
        else{
            res.json({Data_is:data}); 
        }
    }
    catch(e)
    {
        console.log(e);
    }
     
})

module.exports=router;