// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  const greaterThan10 = (element) => element > 10;
  return input.some(greaterThan10);
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  const longerThan10 = (text) => text.length > 10;
  return input.some(longerThan10);
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  for (const vector of input) {
    if (vector.some(element => element === true)) {
      return true;
    }
  }
  return false;
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  const containsLost = (text) => /Lost/.test(text);
  return input.some(containsLost);
};

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
