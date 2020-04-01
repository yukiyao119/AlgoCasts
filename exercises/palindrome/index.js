// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true  "abba"
//   palindrome("abcdefg") === false  "gfedcba"


// make a reversed one, compare it with the original str.

function palindrome(str) {
  const reversed = str.split('').reduce((rev, char)=> char+rev, '')
  return reversed === str ? true : false
}

module.exports = palindrome;

// not optimal solution. using Every
// function palindrome(str){
//   str.split('').every((char, i)=>{
//     return char === str[str.length-i]
//   })
// }
