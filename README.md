# ControllableRandomness
A package that allows you to control the chances of getting a certain number by drawing lines.
## Usage
### [Documentation](https://trueboxguy.github.io/ControllableRandomness/)
```js
const ControllableRandomness = require('../classes/ControllableRandomness'),
  controllableRandom = new ControllableRandomness(5, 100); // specify min and max here
controllableRandom.set({
  position: 6,
  value: 50
}, {
  position: 20,
  value: 10
}); // this makes a line, two points are needed. All points start with a value of 1.

controllableRandom.generate(); //this generates the number from a point
/*
The value of each point is added up.
With this, a random number is generated with the range of 0, to the sum of all points.
The number returned is the point where the sum of all points behind it and itself 
is greater than the random number generated.
*/
```
## Todo
* Make it possible to generate numbers that aren't truncated.
* Draw curves with multiple points.
