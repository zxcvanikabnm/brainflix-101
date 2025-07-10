// routes/videoRoutes.js
const express = require("express");
const { v4: uuidv4 } = require("uuid");
// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const router = express.Router();
const DATA_PATH = path.resolve(__dirname, "../data/videos.json");

const getVideoList = require("../controllers/getVideoList");
const getMainVideo = require("../controllers/getMainVideo");
const addVideo = require("../controllers/addVideo");
const getComments = require("../controllers/getComments");
const addComment = require("../controllers/addComment");

router.get("/", getVideoList);
router.get("/:id", getMainVideo);
router.post("/", addVideo);
router.get("/:id/comments", getComments);
router.post("/:id/comments", addComment);


module.exports = router;
