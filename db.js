const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crud-proyect");
const connections = mongoose.connection;
connections.on("connected", () => {
  console.log("conection succesfully");
});
connections.on("error", () => {
  console.log("conection failed");
});
module.exports = mongoose;
