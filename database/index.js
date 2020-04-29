const mongoose = require("mongoose");
require("custom-env").env("local");

const mongoDB = process.env.URI;

const startConnection = async () => {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch {
    console.log("Failed to start a connection");
    throw new Error();
  }
};

module.exports = { startConnection };
