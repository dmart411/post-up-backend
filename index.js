const mongoose = require("mongoose");
const express = require("express");
const keys = require("./config/keys");

mongoose.connect(keys.mongoUri);

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.send("hi");
});

app.listen(8000, () => {
  console.log("running");
});
