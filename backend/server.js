const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;
const item = require("./router/items");

app.use("/admin", item);

app.get("/", (req, res) => {
  console.log("we are online");
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log("ERORR ", err);
  }
  console.log(`Listening on port ` + PORT);
});

const cors = require('cors')
app.use(cors({origin: 'http://localhost:3000'}))

//////////////////////////////////////////////

// dont forgat http://localhost:3001/flower/
const flower = require('./router/flower')
app.use('/flower', flower)

//////////////////////////////////////////////

// dont forget http://localhost:3001/user/
const user = require('./router/user')
app.use('/user', user)



