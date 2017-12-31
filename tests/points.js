const ControlableRandomness = require('../classes/ControlableRandomness'),
  random = new ControlableRandomness(5, 100);
random.set({
  posistion: 6,
  value: 50
}, {
  posistion: 20,
  value: 10
});

const results = {};
for (let i = 0; i < 1e5; i++) {
  const number = random.generate();
  if (number.toString() in results) results[number.toString()]++;
  else results[number.toString()] = 1;
}

console.log(results);
