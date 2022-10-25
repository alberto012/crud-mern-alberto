const mongoose = require("mongoose");
const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();

const data = new mongoose.Schema({
  typeOfAnimal: {
    type: String,
    values: ["Novillo", "Toro", "Vaquillona"],
    required: true,
    lowercase: true,
  },
  weight: {
    type: String,
    required: true,
  },
  typeOfDevice: {
    values: ["Collar", "Caravana"],
    type: String,
    required: true,
    lowercase: true,
  },
  numberOfDevice: {
    type: Number,
    required: true,
  },
  namePaddock: {
    type: String,
    required: true,
    maxLength: 200,
  },
  senansaId: {
    type: String,
    required: true,
    maxLength: 16,
  },
});
const AnimalModel = mongoose.model("schemaOfAnimal", data);
module.exports = router;
router.post("/add", (req, res) => {
  const newData = new AnimalModel({
    typeOfAnimal: req.body.typeOfAnimal,
    weight: req.body.weight,
    typeOfDevice: req.body.typeOfDevice,
    numberOfDevice: req.body.numberOfDevice,
    namePaddock: req.body.namePaddock,
    senansaId: req.body.senansaId,
  });

  newData.save(function (err) {
    if (!err) {
      res.send("Data Added");
    } else {
      res.send(err);
    }
  });
});
router.get("/all", (req, res) => {
  AnimalModel.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
router.post("/edit", (req, res) => {
  AnimalModel.findOneAndUpdate(
    { id: req.body._id },
    {
      typeOfAnimal: req.body.typeOfAnimal,
      weight: req.body.weight,
      typeOfDevice: req.body.typeOfDevice,
      numberOfDevice: req.body.numberOfDevice,
      namePaddock: req.body.namePaddock,
      senansaId: req.body.senansaId,
    },
    (err) => {
      if (!err) {
        res.send("user updated");
      } else {
        res.send(err);
      }
    }
  );
});
router.post("/delete", (req, res) => {
  AnimalModel.findByIdAndDelete({ id: req.body._id }, (err) => {
    if (!err) {
      res.send("data is deleted");
    } else {
      res.send(err);
    }
  });
});
router.get("/:id", async (req, res) => {
  AnimalModel.findById(req.params.id, (doc, err) => {
    if (!err) {
      res.send(doc);
    } else {
      res.send(err);
    }
  });
});
