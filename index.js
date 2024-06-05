const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]}  - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
	return words.sort((a, b) => a.length - b.length);
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
	const results = [];
	for (let i = 1; i < word.length; i++) {
		results.push(word.slice(i) + word.slice(0, i));
	}
	results.push(word);
	return results;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
	if (numbers.some((ele) => typeof ele != "number")) return numbers;
	const maxNum = Math.max(...numbers);
	const minNum = Math.min(...numbers);
	return Math.abs(maxNum - minNum);
}

/**
 * Returns the message translated into morse code
 * @param {String} message - A string to translate.
 * @param {Object[]} dictionary - A morse code dictionary ( use the one imported at the top of this file)
 * @returns {String} The message in morse code
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 */

/*
"A new month"
 i


*/
function morseCodeTranslator(message, dictionary) {
	// morseCodeDictionary;
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
