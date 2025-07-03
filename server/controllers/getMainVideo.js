// returns one main video
// checked on postman and this works http://localhost:8080/videos/1a4kjruuedd9

const videos = require("../data/videos.json");

function getMainVideo(id) {
  return videos.find((video) => video.id === id);
}

module.exports = getMainVideo;
