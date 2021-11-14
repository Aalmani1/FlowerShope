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
