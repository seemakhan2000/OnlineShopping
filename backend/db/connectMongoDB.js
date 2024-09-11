require("dotenv").config();
const mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI
console.log(mongoDB);

async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoDB);

    console.log("MongoDB is connected");
  } catch (error) {
    //console.error(`Unable to connect to the server: ${error}`);
    throw new Error(`Unable to connect to the server: ${error}`);
  }
}
module.exports = {
  connectToMongoDB,
};
