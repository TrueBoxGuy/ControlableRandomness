const ControllableRandomness = require('controllablerandomness'),
  random = new ControllableRandomness(5, 100);
random.set({
  position: 6,
  value: 50
}, {
  position: 20,
  value: 10
});

const results = {};
for (let i = 0; i < 1e5; i++) {
  const number = random.generate();
  if (number.toString() in results) results[number.toString()]++;
  else results[number.toString()] = 1;
}

console.log(results); // this shows how many times each result happened.
