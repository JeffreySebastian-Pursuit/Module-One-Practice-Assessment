/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

function letterCount(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let el = str[i].toLowerCase();
    if (count[el]) {
      count[el] += 1;
    } else if (el === " ") {
      el.split(" ").length - 1;
    } else {
      count[el] = 1;
    }
  }
  return count;
}
console.log(letterCount("HELLO World"));
module.exports = letterCount;
