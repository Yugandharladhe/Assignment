const mongoose = require("mongoose");

mongoose.connect("mongodb://project-mydb:MIWU7tNg0zwNMchhIB8DRK0Ehjbo8XajgH57mc0JQFGj7n6Rmq3YKtn03fw7hZ3jAPmw7mDU8FTnACDb19NsiQ==@project-mydb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@project-mydb@").then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("failed");
})
