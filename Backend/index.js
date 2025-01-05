const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routers/authRoutes");
const userRoutes = require("./routers/userRoutes");
const friendRoutes = require("./routers/friendRoutes");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(cors());
connectDB();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/friends", friendRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
