const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.re8ce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(console.log("mongodb connected successfully"))
    .catch((error) => console.log("Error connecting to mongodb", error));
};

module.exports = connectDB;
