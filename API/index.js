const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Import routes
const apiRoutes = require("./apiRoutes");
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  }),
  cors()
);
app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
mongoose.connect(
  "mongodb://devincimdb2057.westeurope.cloudapp.azure.com:30000/employee",
  { useNewUrlParser: true }
);

var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;

//Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express"));

// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port
app.listen(port, function() {
  console.log("Running API on port " + port);
});
