// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
const charMap = require('../lib/charMap');

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }
  const trimmedA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const trimmedB = stringB.replace(/[^\w]/g, '').toLowerCase();
  const aMap = charMap(trimmedA);
  const bMap = charMap(trimmedB);
  for (var key in aMap) {
    if (bMap[key] !== aMap[key]) {
      return false;
    }
  }
  return true;
}

// function anagrams(stringA, stringB) {
//   return clearString(stringA) === clearString(stringB);
// }

function clearString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('Hello world', 'world hello');

module.exports = anagrams;
