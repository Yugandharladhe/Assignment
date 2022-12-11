const express=require("express");
const router=express.Router();
const Schema=require("../models/schema");

router.post("/insertdetails",async (req,res)=>{
    const data=await Schema.findOne({mobile:req.body.mobile});
    if(data==null)
    {
        const obj= new Schema({
            mobile:req.body.mobile,
            timeStamp:Date.now(),
            name:req.body.name,
            city:req.body.city
        })
        const saved=await obj.save();
        res.json({
            status:"saved"
        }).status(200);
    }
    else{
        res.json({
            status:"already present"
        }).status(400);
    }
})

module.exports=router;