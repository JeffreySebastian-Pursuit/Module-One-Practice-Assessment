/**
 * Returns if a number is divisible by 9.
 * @param {number} num - a number
 * @returns {boolean} - is the number divisible by 9
 *
 * ex: isDivisibleBy9(27) //=> true
 * ex: isDivisibleBy9(16) //=> false
 *
 */

const isDivisibleBy9 = (num) => num % 9 === 0; // optional ? true : false

console.log(isDivisibleBy9(18));
console.log(isDivisibleBy9(0));

module.exports = isDivisibleBy9;
