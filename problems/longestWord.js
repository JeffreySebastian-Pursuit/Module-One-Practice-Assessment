/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

function longestWord(words) {
  let findLongestWord = "";
  words.map((el) => {
    if (el.length > findLongestWord.length) {
      findLongestWord = el;
    }
  });
  return findLongestWord;
}
console.log(longestWord(["cat", "bird", "hello", "corey", "do"]));
module.exports = longestWord;
