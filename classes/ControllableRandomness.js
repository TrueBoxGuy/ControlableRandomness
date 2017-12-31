/* Class to generate random numbers, but you can control the chances of which number you will generate */
class ControllableRandomness {
  /**
   * Initialises the array that numbers are selected from.
   * @param  {number} min Minimun number, gets truncated.
   * @param  {number} max Maximum number, gets truncated.
   * @throws {RangeError} Min must be smaller than max.
   */
  constructor(min, max) {
    min = Math.trunc(min), max = Math.trunc(max);
    if (min >= max) throw new RangeError(
      "Minimum value has to be smaller than maximum value");
    this.min = min;
    this.max = max;
    this.choices = new Array(max - min + 1).fill(1);
  }

  /**
   * A position and a value for a line
   *  @typedef {Object} point
   *  @property {Number} position - The position of this point, has to be in range of min, max and will be truncated.
   *  @property {Number} value - The value of this point, has to be positive.
   */

  /**
   * Sets a line between two points
   * @param {point} point1 The first point.
   * @param {point} point2 The second point.
   * @throws {RangeError} A position is not in range or a value supplied is negative.
   */
  set(point1, point2) {
    const {
      min, max, choices
    } = this;
    let {
      position: pos1,
      value: val1
    } = point1, {
      position: pos2,
      value: val2
    } = point2; // deals with mutability
    pos1 = Math.trunc(pos1);
    pos2 = Math.trunc(pos2);

    if (pos1 > max || pos1 < min || pos2 > max || pos2 < min) throw new RangeError(
      "A position is not in range");
    if (val1 < 0 || val2 < 0) throw new RangeError("A value is negative");

    if (pos1 > pos2) {
      pos1 = [pos2, pos2 = pos1][0];
      val1 = [val2, val2 = val1][0];
    }

    const step = (val2 - val1) / (pos2 - pos1);
    let value = val1;

    for (let pos = pos1 - min; pos <= (pos2 - min); pos++) {
      choices[pos] = value;
      value += step;
    }
  }

  /**
   * Generates a random number.
   * @return {Number} A random number
   */
  generate() {
    const {
      min, choices
    } = this;
    let total = 0;

    for (const number of choices) {
      total += number;
    }
    const choice = Math.random() * total;
    total = 0;
    for (let i = 0; i < choices.length; i++) {
      total += choices[i];
      if (total >= choice) return i + min;
    }
  }
}

module.exports = ControllableRandomness;
