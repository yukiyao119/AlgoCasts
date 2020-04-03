// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;


/* SOLUTION FOR LEETCODE REVERSE INTEGER, OVERFLOW */
// var reverse = function(x) {
//   let negative = false;

//   if (x<0){
//     negative = true
//     x *= -1
//   }

//   let reversed = 0
//   while(x>0){
//     reversed = (reversed * 10) + (x % 10)
//     x = Math.floor(x/10)
//   }

//   if (reversed > (2 ** 31 - 1)){
//     return 0
//   }

//   return negative ? reversed * -1 : reversed
// };