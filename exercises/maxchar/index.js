// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {}
  // let arr = str.split('')
  for (let char of str){
    charMap[char] = charMap[char]+1 || 1
  }
  console.log(charMap)

  let max = 0
  let maxChar = ''
  for (let ele in charMap){
    if(charMap[ele]>max){
      max = charMap[ele]
      maxChar = ele
    } 
  }
  return maxChar
}

x="apple 1231111"
maxChar(x)

module.exports = maxChar;
