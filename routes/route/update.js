const mongoose = require("mongoose");

const schemaAnimal = require("./schema");

run();
async function run() {
  try {
    const animal = await schemaAnimal.findOneAndUpdate({ id });
    console.log(animal);
  } catch (error) {
    console.log(error);
  }
}
