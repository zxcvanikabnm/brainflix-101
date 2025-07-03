// returns all the videos
// checked on postman and this works http://localhost:8080/videos
// To make sure you’re always reading the latest video data, including new videos added through POST /videos.


const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "../data/videos.json");

function getVideoList(req, res) {
  console.log("👉 /videos route triggered");

  try {
    const videos = JSON.parse(fs.readFileSync(filePath));
    console.log("✅ videos loaded");

    const videoList = videos.map((video) => ({
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    }));

    res.json(videoList); // Don't forget this line
  } catch (error) {
    console.error("❌ Error reading video list:", error.message);
    res.status(500).json({ message: "Failed to load videos." });
  }
}

module.exports = getVideoList;
