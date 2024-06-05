const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(arr) {

  if(arr.filter(x=>typeof x !== 'string').length>=1){

    return arr;
}
  let newArr = arr.sort((a, b) => (a.length-b.length));
return newArr;
}


/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(str) {
  let arr= [];

  for(let i = 0; i<str.length; i++){
    arr.push(str.slice(i+1)+str.slice(0,i+1));
  }
  return arr;
}
console.log(textScroller('hello'));
/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {

  if(numbers.some(x => typeof x !== "number")){

    return numbers;

  }

  let newArr=numbers.sort((a,b)=>b-a);

  

  return newArr[0]-newArr[newArr.length-1];


}

/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message, morseCodeDictionary) {
  let newStr = message.toUpperCase();
  let str = [];

  for(let i = 0; i < newStr.length; i++) {
    if(morseCodeDictionary[newStr[i]]){
      str.push(morseCodeDictionary[newStr[i]])
    } else {
      continue;
    }
  }
  return str.join(" ");
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
