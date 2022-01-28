// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = '';
  for (let word of str.split(' ')) {
    const warr = word.split('');
    warr[0] = warr[0].toUpperCase();
    result += ' ' + warr.join('');
  }
  console.log(result);
  return result.trim();
}
capitalize('look, it is working!');

module.exports = capitalize;
