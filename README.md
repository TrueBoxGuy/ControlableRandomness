# ControllableRandomness
A package that allows you to control the chances of getting a certain number by drawing lines.
## Usage
```js
const ControllableRandomness = require('../classes/ControllableRandomness'),
  controllableRandom = new ControllableRandomness(5, 100); // specify min and max here
controllableRandom.set({
  posistion: 6,
  value: 50
}, {
  posistion: 20,
  value: 10
}); // this makes a line, two points are needed. 
```
## Todo
* Make it possible to generate numbers that aren't truncated.
* Draw curves with multiple points.
