const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
require("dotenv").config();
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());

app.use("/api/portfolio/", portfolioRoute);

// we cant use port 3000 because react app is already running on it so we do this code which checks if any other port is available through process.env or else uses 5000
const port = process.env.PORT || 5000;
const path=require("path");
if(process.env.NODE_ENV==="production"){

  // telling the deploying app that this is my client folder
  // specific for heroku deployment
  app.use(express.static(path.join(__dirname,"client/build")));
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client/build/index.html"));
  })
}
// start the server
app.listen(port, () => {
  console.log("server running on port ", port);
});
