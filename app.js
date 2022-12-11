const express = require("express");
const app=express();
require("./connection/connect");
const insert=require("./routers/insert");
const get=require("./routers/getdetails");
const latest=require("./routers/latest");

app.use(express.json());
app.use(insert);
app.use(get);
app.use(latest);

app.listen(1000,()=>{
    console.log("listening to port 1000");
});