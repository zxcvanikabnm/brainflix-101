// controllers/addVideo.js
const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const DATA_PATH = path.resolve(__dirname, "../data/videos.json");

/* helper to persist new videos */
async function saveVideo(video) {
    // read existing file
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    // parse json
    const list = JSON.parse(raw);
    // update by adding video to the list of videos
    list.push(video);
    // updating json content by adding new data
    await fs.writeFile(DATA_PATH, JSON.stringify(list, null, 2));
}

module.exports = async (req, res) => {
    const { title, description, channel, videoUrl, thumbnailUrl } = req.body;

    if (!title || !videoUrl || !thumbnailUrl) {
        return res.status(400).json({ error: "Missing fields" });
    }

    // const raw = await fs.readFile(DATA_PATH, "utf-8");
    // const list = JSON.parse(raw);

    const newVideo = {
        id: uuidv4(),
        title,
        description,
        channel,
        video: videoUrl,
        image: thumbnailUrl,
        views: 0,
        likes: 0,
        timestamp: Date.now(),
        comments: [],
    };

    // list.push(newVideo);
    // await fs.writeFile(DATA_PATH, JSON.stringify(list, null, 2));

    // res.status(201).json(newVideo);
    try {
        await saveVideo(newVideo);      // ⬅️ use the helper
        res.status(201).json(newVideo); // respond to client
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save video" });
    }

};
