//imports
const dbFile = require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const all = require("./routes/route/all");
const add = require("./routes/models/Schema");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", add);

app.use("/", add);
app.get("/", (req, res) => {
  res.end("bienvenidos");
});
app.listen(5000, function () {
  console.log("esta corriendo");
});
