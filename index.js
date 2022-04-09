const mongoose = require("mongoose");
const passport = require("passport");
const express = require("express");
const keys = require("./config/keys");
const User = require("./models/user");

mongoose.connect(keys.mongoURI);

const app = express();

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(null, user);
  });
});

// middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.send("hi");
});

app.listen(8000, () => {
  console.log("running");
});
