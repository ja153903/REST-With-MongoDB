const { Schema } = require("mongoose");

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
});

module.exports = UserSchema;
