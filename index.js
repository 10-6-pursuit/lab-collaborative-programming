const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(array) {
array.sort((a,b) => a.length - b.length)
return array;
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let arrayOfWords = [];
  const reverseWord = word.split("");
  for(let i = 0;i<reverseWord.length;i++){
    let newLetter = reverseWord.shift();
    reverseWord.push(newLetter);
    arrayOfWords.push(reverseWord.join(""));
  }
  return arrayOfWords
}
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(arr) {
  if(arr.every(ele => typeof ele === "number")){
    const largestNumber = Math.max(...arr);
    const smallestNumber = Math.min(...arr);
    return largestNumber - smallestNumber;
  }
  return arr;
}
/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(str,obj) {
  let morseCode = "";
  for(let i = 0; i<str.length;i++){
    for(const letter in obj){
      if(str[i].toUpperCase() === letter){
        if(i===0){
          morseCode += obj[letter]
        }else {morseCode += " " + obj[letter]};
      }
    }
  }
  return morseCode;
}
console.log(morseCodeTranslator("A new month",morseCodeDictionary))


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
