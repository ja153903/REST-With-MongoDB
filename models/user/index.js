const mongoose = require("mongoose");
const UserSchema = require("./schema");

const { USER } = require("./constants");

const User = new mongoose.model(USER, UserSchema);

module.exports = User;
