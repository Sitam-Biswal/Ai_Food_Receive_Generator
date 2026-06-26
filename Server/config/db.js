const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Full Error:");
    console.error(error);
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Cause:", error.cause);

    process.exit(1);
  }
};

module.exports = connectDB;