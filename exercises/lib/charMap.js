function charMap(str) {
  const charactersMap = {};
  for (let char of str) {
    charactersMap[char] = charactersMap[char] + 1 || 1;
  }
  return charactersMap;
}

module.exports = charMap;
