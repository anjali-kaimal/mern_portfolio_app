const mongoose=require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL);

// connection object
const connection=mongoose.connection;

// check if connection is success
connection.on('error',()=>{
    console.log("Error connecting to database")
});
connection.on('connected',()=>{
    console.log("MongoDB connection successful")
});

module.exports=connection;
