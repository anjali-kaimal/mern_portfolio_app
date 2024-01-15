const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
require("dotenv").config();
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());

app.use("/api/portfolio/", portfolioRoute);

// we cant use port 3000 because react app is already running on it so we do this code which checks if any other port is available through process.env or else uses 5000
const port = process.env.PORT || 5000;

// start the server
app.listen(port, () => {
  console.log("server running on port ", port);
});
