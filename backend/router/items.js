const express = require("express");
const flowers = require("./flower.json");
const cors = require("cors");
let router = express.Router();
router.use(express.json());

router.use(cors());

router.get("/getFlowers", (req, res) => {
  res.send(flowers);
});

router.post("/postFlowers", (req, res) => {
  req.body.data;
  const flower = {
    id: flowers.length + 1,
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    price: req.body.price,
  };
  flowers.push(flower);
  res.send(flowers);
});

router.delete("/deleteFlowers/:id", (req, res) => {
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

router.put("/putFlowers/:id", (req, res) => {
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
