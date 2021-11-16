const express = require("express");
let router = express.Router();
const fileHandler = require("file-system");
const users = require("./user.json");

router.use(express.json());

router.get("/", (req, res) => {
  // console.log(res)
  res.send(users);
});

// dont forget http://localhost:3001/user/

router.post("/", function (req, res) {
  console.log(req.body);
  let user = {
    id: users.length + 1,
    email: req.body.email,
    password: req.body.password,
  };

  users.push(user);
  fileHandler.writeFile("user.json", `${JSON.stringify(users)}`, (err) => {
    if (err) throw err;
    res.send(user);
  });
});

module.exports = router;
