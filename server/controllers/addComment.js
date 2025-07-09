// Adds a comment to a specific video
// tested on postman and it works
const fs = require("fs");
const path = require("path");

const videoFilePath = path.join(__dirname, "../data/videos.json");

module.exports = (req, res) => {
    const videoId = req.params.id;
    const { name, comment } = req.body;

    if (!name || !comment) {
        return res.status(400).json({ error: "Missing name or comment" });
    }

    const videos = JSON.parse(fs.readFileSync(videoFilePath));
    const video = videos.find((v) => v.id === videoId);

    if (!video) {
        return res.status(404).json({ error: "Video not found" });
    }

    const newComment = {
        id: Date.now().toString(),
        name,
        comment,
        timestamp: Date.now(),
    };

    video.comments.unshift(newComment);
    fs.writeFileSync(videoFilePath, JSON.stringify(videos, null, 2));

    res.status(201).json(newComment);
};
