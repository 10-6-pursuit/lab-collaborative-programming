const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 *
 * The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.
 *
 * Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input.
 */

function textScroller(str) {
  let rotatedArr = [];

  if (str.length == 0) {
    return [];
  }

  let rotatedStr = str

  for (let i = 1; i <= str.length; i++) {
    rotatedStr = rotateStr(rotatedStr)
    rotatedArr.push(rotatedStr)
  }
  return rotatedArr
}

function rotateStr(str) {

  let letters = str.split("");

  let firstLetter = letters.shift();

  letters.push(firstLetter)
  
  return letters.join("")
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(arr) {

  if (arr.some(ele => typeof ele !== "number")) {
    return arr
  }
  
  let sortedArray = arr.sort((a, b) => a - b)

  return sortedArray[arr.length - 1] - sortedArray[0]
}

/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(str, morseCodeDictionary) {
let split = str.split(" ")
return split.map(word => {

  let wordSplit = word.split("")

  let newWord = ""

  for (let i = 0; i < wordSplit.length; i++){
      newWord += morseCodeDictionary[wordSplit[i].toUpperCase()]
      newWord += " "
  }             
 return newWord
}).join("").trim()
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};