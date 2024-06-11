const morseCodeDictionary = require("./morse-code-dictionary.json");

/*
index.js is the entry point for a Node.js application. It sets up the server, initializes middleware, defines routes, and starts listening for requests
const morseCodeDictionary = require("./morse-code-dictionary.json");
//This program uses jest as a testing library
//back-end development - server side of a web application. includes server, datavase, application logic that handle requests from the front-end, process data, and send responses back to the client. this includes Node.js, Python, Ruby, Java, PHP and frameworks like Express, Django, Ruby on RAils, and Spring.
//Front-end looks like the following:
/frontend
  /src
    index.html
    app.js
    styles.css
  package.json


//Back end files include server.js, app.js, index.js, routes/, models, controllers, config, middlewares.
//Backend looks like the following:
/backend
  /src
    server.js
    routes.js
    models.js
  package.json
//morseCodeDictionary json file maps/translates the alphabetal/numerical/characters to their corresponding morse code representations.
//The dictionary is imported by `const morseCodeDictionary = require("./morse-code-dictionary.json");`
//The functions are called from index.js - core logic of project resides. contains code for encoding and decoding Morse code, handling user input and interfacing with the morese code dictionary.
//package-lock.json - 

*/



/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 * //pseudocode - param in paranthesis

//sort method
//a.length - b.length
a: current word in the array
b: every other word, .sort is used to compare every other word. 
.sort() method is used to sort the elements of an array in place and returns the sorted array by default in ascending order according to their Unicode code points. 

sort without comparisionFunction:

const numbers = [4, 2, 5, 1, 3];
numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'orange']
//////////////////////////////////


//.sort with comparison function
//In numerical order:
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a -b);
console.log(numbers); output: [1, 2, 3, 4, 5]

In a compareFunction, it should take two parameters (often referred to as `a` and `b`), representing two elements to be compared. The function should return 
A negative value if `a` should come before `b`
Zero if `a` and `b` are considered equal (i.e. their order does not change)
A positive value if `b` should come before `a`. 
If no `compareFunction` is provided, the elements are sorted basrd on their string representations' Unicode code points.
 */
// function sortByStringLength(words) {
//   return words.sort((a,b) => a.length - b.length)
// }

// function sortByStringLength(words) {
//   return words.sort((a, b) => a.length - b.length);
// }

function sortByStringLength(words) {
  return words.sort(function(a, b) {
    return a.length - b.length;
  });
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  if (word.length === 0) {
      return [];
  }

  const result = [];
  for (let i = 1; i < word.length; i++) {
      const scrolledWord = word.slice(i) + word.slice(0, i);
      result.push(scrolledWord);
  }
  // Include the first word at the end
  result.push(word);
  return result;
}


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 * Pseudocode - find the largest num and smallest num
 * Substract - Math.abs(), Math.max., Math.min,
 * 
 * 
 */
function betweenExtremes(number) {
  if (number.some(num => typeof num !== "number")) return number; //checking element types

//finding largest num and smallest as well
//difference

  const maxNum = Math.max(...number); 
  const minNum = Math.min(...number);

  return Math.abs(maxNum - minNum);


}

/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 * 
 */
function morseCodeTranslator(message, dictionary) {
  let encoded = "";

  for (let i = 0; i < message.length; i++) {
    const char = dictionary[message[i].toUpperCase()];
    if (char) encoded += char + " ";
  }
  return encoded.trim();
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
