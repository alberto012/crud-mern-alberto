const express = require("express");
const mongoose = require("mongoose");
const model = require("../models/Schema");
const router = express.Router();
router.get("/all", (req, res) => {
  model.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
module.exports = router;
