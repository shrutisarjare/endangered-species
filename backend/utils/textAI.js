const use = require("@tensorflow-models/universal-sentence-encoder");
const tf = require("@tensorflow/tfjs-node");

let model;

const animals = [
  { name: "cat", text: "small animal that says meow" },
  { name: "dog", text: "animal that barks loudly" },
  { name: "cow", text: "large farm animal that says moo" },
  { name: "pig", text: "farm animal that says oink" },
  { name: "sheep", text: "animal that says baa" },
  { name: "frog", text: "animal that croaks near water" }
];

async function loadModel() {
  if (!model) {
    model = await use.load();
  }
}

async function identifyAnimal(input) {

  await loadModel();

  const inputs = animals.map(a => a.text);
  const sentences = [input, ...inputs];

  const embeddings = await model.embed(sentences);

  const inputVector = embeddings.slice([0,0],[1]);
  const animalVectors = embeddings.slice([1,0]);

  const similarities = tf.matMul(inputVector, animalVectors, false, true);
  const scores = similarities.dataSync();

  let bestScore = -1;
  let bestAnimal = "Unknown";

  scores.forEach((score, index) => {
    if (score > bestScore) {
      bestScore = score;
      bestAnimal = animals[index].name;
    }
  });

  return bestAnimal;
}

module.exports = identifyAnimal;