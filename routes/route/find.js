const schemaAnimal = require("./schema");

run();
async function run() {
  try {
    const animal = await schemaAnimal.findOne({ id });
    console.log(animal);
  } catch (error) {
    console.log(error);
  }
}
