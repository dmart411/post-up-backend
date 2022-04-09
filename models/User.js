const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
});

userSchema.plugin(passportLocalMongoose);

module.export = mongoose.model("users", userSchema);
