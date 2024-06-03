const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arr) {
  return arr.sort((x, y) => x.length - y.length);
}
/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(str) {
  let array = str.split("");
  const letter = array[0];
  const resultArr = [];
  for (let i = 0; i < str.length; i++) {
    array.push(array[0]);
    array.shift();
    resultArr.push(array.join(""));
  }
  return resultArr;
}

// Use array method to push into an empty array
// Use split on string
// Use map method on the new split array

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(nums) {
  let max = 0;
  let min = Infinity;
  let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number") {
      return nums;
    }
    if (nums[i] > max) {
      max = nums[i];
    } else if (nums[i] < min) {
      min = nums[i];
    }
  }
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
function morseCodeTranslator(str, obj) {
  let result = [];
  for (let element of str) {
    if (element === " ") {
      continue;
    }
    result.push(obj[element.toUpperCase()]);
  }
  return result.join(" ");
}

console.log(morseCodeTranslator("A new month", morseCodeDictionary));
module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
