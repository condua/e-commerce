const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://phanphuc0311:phuc1755@cluster0.kkn7cwq.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDatabase;
