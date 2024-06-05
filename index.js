const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  return words.sort((a, b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(str) {
      rotatingStr = [];
      
      for (let i = 1; i <= str.length; i++) {
        
        const rotateStr = str.slice(i) + str.slice(0, i);
        
        rotatingStr.push(rotateStr);
      }
      return rotatingStr;



}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numArr) {
  
  if (numArr.length < 1 ) {
    return [];
  } else if (!numArr.every(element =>  typeof element === 'number')) {
    return numArr.slice();
  }
    
  
  
  let largest = Math.max(...numArr);
  let smallest = Math.min(...numArr);
  
  return largest - smallest;
  
}
  





/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, dictionary) {
  let morseMessage = [];

  for (let i = 0; i < message.length; i++) {
     
    let char = message[i].toUpperCase();

    if ( char in dictionary) {
      morseMessage.push(dictionary[char]);
    } 
  }
  return morseMessage.join(' ');


}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
