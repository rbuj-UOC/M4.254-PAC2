function multiplyBy10(array) {
  return array.map((element) => element * 10);
}

function shiftRight(array) {
  return array.map((element, index, wholeArray) => {
    return index === 0 ? array[wholeArray.length - 1] : array[index - 1];
  });
}

function onlyVowels(array) {
  return array.map((text) => text.match(/[aeiou]/gi).join(''));
}

function doubleMatrix(array) {
  return array.map((vector) => vector.map((element) => element * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
