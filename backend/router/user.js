const express = require("express");
let router = express.Router();
const fs = require("file-system");
const users = require("../user.json");

router.use(express.json());

router.get("/", (req, res) => {
  // console.log(res)
  res.send(users);
});

// dont forget http://localhost:3001/user/

router.post("/", function (req, res) {
  //res.send(req.body.password);
  let user = users.find((user)=> user.email == req.body.email );
  // res.send(user)
  if (user != undefined){
    if (user.password == req.body.password){
      res.send(true)
    }else{
      res.send(false)
    }
  }else{
    res.send(false)
  }
  
});




module.exports = router;
