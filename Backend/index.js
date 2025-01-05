const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routers/authRoutes");
const userRoutes = require("./routers/userRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
