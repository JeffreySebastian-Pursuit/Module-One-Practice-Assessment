/**
 * Return the product of all odd numbers in an array.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 *
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */

function productOfOddNumbers(nums) {
  let product = 1;
  let newArray = nums.every((num) => {
    return num % 2 === 0; //this returns a boolean, if this array has even #s return true
  });
  if (newArray) {
    //if the even numbers are in that array aka true
    return (product = 0); // then return 0
  }
  nums.forEach((num) => {
    if (num % 2 === 1) {
      product *= num;
    }
  });
  return product;
}

// let even = 0;
// let odd = 1; // create a variable that equals 1
// for(let i = 0; i<nums.length; i++){ // create a for loop
//     if(nums[i] % 2 === 1){ // set a conditional
//        odd = odd * nums[i] // multiply all the odd number
//     // }else if (nums[i] % 2 === 0){
//     //     even = even * nums[i]
//     }
// }
// if(odd === 1){ //
//     return 0
// }
// return odd
// }
console.log(productOfOddNumbers([2, 4]));
module.exports = productOfOddNumbers;
