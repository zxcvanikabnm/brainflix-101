// routes/videoRoutes.js
const express = require("express");
const router = express.Router();

const getVideoList = require("../controllers/getVideoList");
const getMainVideo = require("../controllers/getMainVideo");

router.get("/", getVideoList);
router.get("/:id", getMainVideo);

module.exports = router;
