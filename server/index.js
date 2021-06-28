const express = require("express");
const cors = require("cors");
const tours = require("./tours");
const port = 3001;
const app = express();

app.use(cors());

app.listen(port, () => {
  console.log("listening on port 3001");
});

app.get("/", (req, res) => {
  res.json(tours);
});
