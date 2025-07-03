// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

const videoRoutes = require("./routes/videoRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    console.log("Logging...");
    next();
});

// Authentication middleware (placeholder)
app.use((req, res, next) => {
    console.log("Authenticating...");
    next();
});

// Root route
// Example route
// app.get("/", (req, res) => {
//     res.send("Server is running!");
// });
app.get("/", (req, res) => {
    res.send([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// Video routes 
// This means:
// GET /videos → triggers getVideoList
// GET /videos/:id → triggers getMainVideo
// POST /videos → triggers addVideo
app.use("/videos", videoRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
