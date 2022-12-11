const express=require("express");
const router=express.Router();
const Schema=require("../models/schema");

router.post("/particularuser",async(req,res)=>{
    const data=await Schema.findOne({mobile:req.body.mobile}).select({insertAt:0});
    if(data==null)
    {
        res.json({status:"data not found"}).status(400);
    }
    else
    {
        res.json({user:data}).status(200);
    }
})

module.exports=router;