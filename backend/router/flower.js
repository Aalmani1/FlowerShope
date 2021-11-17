// we only need the get

const express = require("express");
const router = express.Router();
const fs = require("file-system");
const flowers = require("./flower.json");

// Router.use(express.json())

// dont forgat http://localhost:3001/flower/

router.get("/listFlower", (req, res) => {
  console.log(res);
  res.send(JSON.stringify(flowers));
});

module.exports = router;
