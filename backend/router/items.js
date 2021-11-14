const express = require("express");
const items = require("./item.json");
const cors = require("cors");
let router = express.Router();
router.use(express.json());

router.use(cors());

router.get("/getItems", (req, res) => {
  res.send(items);
});

router.post("/postItem", (req, res) => {
  req.body.data;
  const item = {
    id: items.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  items.push(item);
  res.send(items);
});

router.delete("/deleteItem/:id", (req, res) => {
  let found = items.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let targetIndex = items.indexOf(found);
    items.splice(targetIndex, 1);
    res.send(items);
  } else {
    res.sendStatus(404);
  }
});

router.put("/putItem/:id", (req, res) => {
  let found = items.find(function (item) {
    return item.id === parseInt(req.params.id);
  });
  if (found) {
    let update = {
      id: found.id,
      name: req.body.name,
      price: req.body.price,
    };
    let targetIndex = items.indexOf(found);
    items.splice(targetIndex, 1, update);
    res.send(items);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
