//imports
const dbFile = require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const add = require("./routes/models/Schema");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", add);

app.use("/", add);
app.get("/", (req, res) => {
  res.end("Welcome");
});
app.listen(5000, function () {
  console.log("its ON");
});
