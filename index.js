const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength( array ) {
  return array.sort((a, b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */

function textScroller( string ) {
  let arr = [];
  if( !string.length ) {
    return arr;
  } else {
    for (let i = 1; i <= string.length; i++) {
      arr.push( string.slice(i).concat(string.slice(0, i)) )
    }
  }
  return arr;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes( array ) {
  let smallest = Math.min(...array);
  let largest = Math.max(...array);

  return array.every( num => !isNaN(num) ) ? largest - smallest : array;
}

/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */

function morseCodeTranslator( alphaString, morseCodeDictionary) {
  return alphaString.split(" ")
  .map( word => word.split("")
  .map( char => morseCodeDictionary[char.toUpperCase()] )
  .join(" "))
  .join(" ")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};