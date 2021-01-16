/**
 * Takes in an object and returns the sum of all values
 * @param {Object} obj - an object with key value pairs
 * @returns {number} - sum of all values
 *
 * ex: sumOfValuesOfObject({corey: 5, sam: 10, peter: 3, sparky: 9})
 * returns 27
 */

function sumOfValuesOfObject(obj) {
  let value = 0;
  for (let key in obj) {
    value += obj[key];
  }
  return value;
}
console.log(sumOfValuesOfObject({ corey: 5, sam: 10, peter: 3, sparky: 9 }));
module.exports = sumOfValuesOfObject;
