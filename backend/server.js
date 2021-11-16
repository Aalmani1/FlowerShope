const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;
const flower = require("./router/items");
const user = require("./router/user");
app.use("/user", user);

app.use("/flowers", flower);

app.get("/", (req, res) => {
  console.log("we are online");
});

// app.use(cors({ origin: "http://localhost:3000" }));

//////////////////////////////////////////////

// dont forgat http://localhost:3001/flower/
// app.use("/flower", flower);

//////////////////////////////////////////////

// dont forget http://localhost:3001/user/

app.listen(PORT, (err) => {
  if (err) {
    return console.log("ERORR ", err);
  }
  console.log(`Listening on port ` + PORT);
});
