// returns all the videos
// checked on postman and this works http://localhost:8080/videos

const videos = require("../data/videos.json");

function getVideoList() {
    return videos.map((video) => ({
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
    }));
}

module.exports = getVideoList;
