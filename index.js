const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(array) {
return array.sort((a,b)=>a.length-b.length)
}
/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  let newWord=word.split(``)
  let array=[]

for(let i=0;i<word.length;i++){
    newWord.push(newWord.shift())
    array.push(newWord.join(``))
    


}

    return array
}


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(array) {
 
  for(let x of array){
    if(typeof x !==`number`){
      return array
    }
  }
//  if( array.some(el=>typeof el!==`number`)){
//   return array
//  }
array.sort((a,b)=>b-a)
// return Math.max(...array)-Math.min(...array)

return array[0]-array[array.length-1]
}
/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */
function morseCodeTranslator(message) {
  let array=[]
  for(let x of message){
  
   if(x!==` `){
      array.push(morseCodeDictionary[x.toUpperCase()])
    }

  }
  return array.join(` `)
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
