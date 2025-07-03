// routes/videoRoutes.js
const express = require("express");
const router = express.Router();

const getVideoList = require("../controllers/getVideoList");
const getMainVideo = require("../controllers/getMainVideo");
const addVideo = require("../controllers/addVideo");

router.get("/", getVideoList);
router.get("/:id", getMainVideo);
router.post("/", addVideo);

module.exports = router;
