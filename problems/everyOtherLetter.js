/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} -
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */

function everyOtherLetter(str) {
  let evenLetters = "";
  for (let i = 0; i < str.length; i += 2) {
    // i++
    // if(i % 2 === 0){
    evenLetters += str[i];
    // }
  }
  return evenLetters;
}
console.log(everyOtherLetter("mississippi"));
module.exports = everyOtherLetter;
