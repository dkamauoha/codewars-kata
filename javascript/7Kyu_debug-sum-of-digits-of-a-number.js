// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// code to correct:
// function getSumOfDigits(integer) {
//   let strArr = integer.toString().split('');
//   return strArr.reduce((total, i) => total += (i*1));
// }

const getSumOfDigits = integer => integer.toString().split('').reduce((total, i) => total += Math.floor(i), 0)
