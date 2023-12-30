const express = require("express");

const { retrieve, shorten } = require("./controllers/shortener");

const router = express.Router();

router.post("/shortener", shorten);

router.get("/short/:id", retrieve);

module.exports = router;
