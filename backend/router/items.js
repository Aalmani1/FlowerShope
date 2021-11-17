const express = require("express");
const flowers = require("./flower.json");
const cors = require("cors");
let router = express.Router();
router.use(express.json());

router.use(cors());

router.get("/items", (req, res) => {
  res.send(flowers);
});

router.post("/admin/postFlowers", (req, res) => {
  req.body.data;
  const flower = {
    id: flowers.length + 1,
    name: req.body.data.name,
    img: req.body.data.img,
    description: req.body.data.description,
    price: req.body.data.price,
  };
  flowers.push(flower);
  res.send(flowers);
});

router.delete("/admin/deleteFlowers/:id", (req, res) => {
  let found = flowers.find(function (flower) {
    return flower.id === parseInt(req.params.id);
  });
  if (found) {
    let targetIndex = flowers.indexOf(found);
    flowers.splice(targetIndex, 1);
    res.send(flowers);
  } else {
    res.sendStatus(404);
  }
});

router.put("/admin/putFlowers/:id", (req, res) => {
  let found = flowers.find(function (flower) {
    return flower.id === parseInt(req.params.id);
  });

  if (found) {
    let update = {
      id: found.id,
      name: req.body.name,
      img: req.body.img,
      description: req.body.description,
      price: req.body.price,
    };
    let targetIndex = flowers.indexOf(found);
    flowers.splice(targetIndex, 1, update);
    res.send(flowers);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
