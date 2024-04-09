function sum(array) {
  return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function productAll(array) {
  return array.flat().reduce((acumulador, valorActual) => acumulador * valorActual, 1);
}

function objectify(array) {
  return array.reduce((acumulador, [propietat, valor]) => ({ ...acumulador, [propietat]: valor }), {});
}

function luckyNumbers(array) {
  return array.reduce((valorAnterior, valorActual, index, vector) => {
    if (index == 0) {
      return valorAnterior + `${valorActual}`;
    } else {
      if (vector.length - 1 == index) {
        return valorAnterior + ', and ' + `${valorActual}`;
      } else {
        return valorAnterior + ', ' + `${valorActual}`;
      }
    }
  }, 'Your lucky numbers are: ')
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
