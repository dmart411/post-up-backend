const mongoose = require("mongoose");
const express = require("express");
const keys = require("./config/keys");

mongoose.connect(
  `mongodb+srv://postup:${keys.mongoPassword}@post-up.qjou4.mongodb.net/${keys.mongoDatabase}?retryWrites=true&w=majority`,
);

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
