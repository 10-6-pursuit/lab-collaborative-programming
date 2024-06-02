const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
const sortByStringLength = (arr) => arr.sort((a, b) => a.length - b.length);

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(str) {
  if (!str) return [];

  const result = [];
  for (let i = 1; i <= str.length; i++)
    result.push(str.slice(i) + str.slice(0, i));

  return result;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if(!numbers.every(num => typeof num === 'number')) return numbers;

  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return max - min;
}

/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(str) {
  const result = [];

  str = str.toUpperCase();

  for (char of str) {
    morseCodeDictionary[char] ? result.push(morseCodeDictionary[char]) : null;
  }

  return result.join(" ");
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
