function onlyEven(array) {
  return array.filter((x) => x % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter((text) => /^\S+$/.test(text));
}

function positiveRowsOnly(array) {
  return array.filter((vector) => {
    return vector.every((element) => element >= 0);
  });
}

function allSameVowels(array) {
  return array.filter((text) => {
    const vowels = text.match(/[aeiou]/gi);
    return vowels.every((vowel) => vowel === vowels[0]);
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
