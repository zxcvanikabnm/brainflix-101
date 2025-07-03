// Adds a video to the videos.json file
// This function is used to handle video uploads in development mode.
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../data/videos.json");

function addVideo(req, res) {
    // In production, uploads are disabled for security reasons.
    // Tested and this works. I get the message "Uploads are disabled in production."
    if (process.env.NODE_ENV === "production") {
        return res
            .status(403)
            .json({ message: "Uploads are disabled in production." });
    }

    const videos = JSON.parse(fs.readFileSync(filePath));

    const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        channel: req.body.channel || "Your Channel",
        image: req.body.image,
        description: req.body.description || "",
        views: "0",
        likes: "0",
        duration: req.body.duration || "0:00",
        video: req.body.video || "",
        timestamp: Date.now(),
        comments: [],
    };

    videos.push(newVideo);
    fs.writeFileSync(filePath, JSON.stringify(videos, null, 2));

    res.status(201).json(newVideo);
}

module.exports = addVideo;
