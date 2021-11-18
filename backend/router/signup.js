const express = require("express");
let router = express.Router();
const fill = require("file-system");
const users = require("../user.json");

router.use(express.json());

router.get("/signUp", (req, res) => {
    // console.log(res)
    res.send(users);
  });

//http://localhost:3001/new/signUp
// router.post('/signUp', (req, res) =>{
//     console.log(req.body)
//     let user ={
//         id: blogs.length +1, 
//         email: req.body.email,
//         password: req.body.password
//     }
//     users.push(user)
//     res.send(user)
//     fs.writeFile("user.json", `${JSON.stringify(users)}`,(err)=>{
//            if(err) throw err;
//            res.send(user)
//   });

  router.post('/', (req,res) =>{
      console.log(req.body)
      let user ={
        id: users.length +1, 
        email: req.body.email,
        password: req.body.password,
      }
      users.push(user)
      fill.writeFile("user.json", `${JSON.stringify(users)}`,(err) =>{
          if(err) throw err;
          res.send(user)
      })
  })


  module.exports = router;
