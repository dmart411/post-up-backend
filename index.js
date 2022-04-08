const mongoose = require("mongoose");
const express = require("express");

mongoose.connect(
  `mongodb+srv://postup:${keys.mongoPassword}@post-up.qjou4.mongodb.net/${keys.mongoDatabase}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
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
