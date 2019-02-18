// Description:
// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2

const digital_root = n => n.toString().split('').map(e => (e *1)).reduce((a,b) => a += b).toString().split('').map(e => parseInt(e)).reduce((a,b) => a += b);

/*
  OR
*/

function digital_root2(n) {
  let nStr = String(n);
  let arr= nStr.split('');
  let newArr = arr.map(e => (e * 1));
  let answer = newArr.reduce((a,b) => a += b);
  let answerStr = answer.toString();
  let arr2 = answerStr.split('')
  let finalAnswer = arr2.map(e => parseInt(e)).reduce((a,b) => a += b);
  return finalAnswer
}

//Recursive Solution
function digital_root3(n) {
  if (n < 10) return n;
  
  return digital_root(n.toString().split('').reduce((acc, d) => acc + d), 0);
}