// returns one main video
// checked on postman and this works http://localhost:8080/videos/1a4kjruuedd9
// To make sure you’re always reading the latest video data, including new videos added through POST /videos.

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/videos.json");

function getMainVideo(req, res) {
  const videos = JSON.parse(fs.readFileSync(filePath));
  const video = videos.find((video) => video.id === req.params.id);

  if (!video) {
    return res.status(404).json({ message: "Video not found" });
  }

  res.json(video);
}

module.exports = getMainVideo;
