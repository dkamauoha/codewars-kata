// Description:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

let pigIt = str => str.split(' ').map(e => e.match(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g) ? e : e.slice(1)+e.charAt(0)+'ay').join(' ');
