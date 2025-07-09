// Gets all the comments on a specific video
// tested on postman and it works
const fs = require("fs");
const path = require("path");

const videoFilePath = path.join(__dirname, "../data/videos.json");

module.exports = (req, res) => {
    const videoId = req.params.id;
    const videos = JSON.parse(fs.readFileSync(videoFilePath));
    const video = videos.find((v) => v.id === videoId);

    if (!video) {
        return res.status(404).json({ error: "Video not found" });
    }

    res.json(video.comments || []);
};
