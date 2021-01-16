/**
 * Return if a given number includes 0.
 * @param {number} num - a number
 * @returns {boolean} - is zero in the number
 *
 * ex: numberIncludes0(1023) //=> true
 * ex: numberIncludes0(123) //=> false
 *
 */

function numberIncludes0(num) {
  let str = num.toString();
  if (str.includes("0")) {
    return true;
  } else {
    return false;
  }
  // return num.toString().includes("0")
}
console.log(numberIncludes0(1023)); //=> true
console.log(numberIncludes0(789)); //=> false
module.exports = numberIncludes0;
