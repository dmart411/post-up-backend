const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const express = require("express");
const keys = require("./config/keys");
const User = require("./models/user");

mongoose.connect(keys.mongoURI);

const app = express();

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

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
