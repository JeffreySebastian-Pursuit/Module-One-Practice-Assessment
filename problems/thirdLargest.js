/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */

function thirdLargest(nums) {
  if (nums.length <= 3) {
    return null;
  }
  // create a variable that is equals to -Infinity
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thrdLargest = -Infinity;
  // transverse the elements to find the third largest
  for (let i = 0; i < nums.length; i++) {
    // if current element is greater than first,
    // then update the first, second, and third
    if (nums[i] > largest) {
      thrdLargest = secondLargest;
      secondLargest = largest;
      largest = nums[i];
      // if nums[i] is in between first and second
    } else if (nums[i] > secondLargest) {
      thrdLargest = secondLargest;
      secondLargest = nums[i];
      // if nums[i] is in between second and third largest
    } else if (nums[i] > thrdLargest) {
      thrdLargest = nums[i];
      // } else if (nums[i].length <= 3){
      //     nums[i] === null
    }
  }
  // return the third largest
  return thrdLargest;
}

console.log(thirdLargest([12, 3, 8]));
module.exports = thirdLargest;
