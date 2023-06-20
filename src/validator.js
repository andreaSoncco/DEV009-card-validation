const validator = {
  isValid: function (number) {
    const numeroInvertido = number.split("").reverse();
    // 0 1 2 3 4 5 6 7 8 9 10
    // 2 4 6 7 8 9 2 4 2 1 4
    let sum = 0;
    for (let i = 0; i < numeroInvertido.length; i++) {
      if (i % 2 !== 0) {
        numeroInvertido[i] *= 2;
        if (numeroInvertido[i] >= 10) {
          numeroInvertido[i] -= 9;
        }
      }
      sum += parseInt(numeroInvertido[i]);
    }


    const resto = sum % 10 === 0;
    if (sum !== 0) {
      return resto;
    }
    else {
      return false;
    }

  },
  maskify: function (number) {
    let acumulador = "";
    const conteo = parseInt(number.length);
    for (let i = 0; i < number.length; i++) {
      if (i > (conteo - 5)) {
        acumulador = acumulador + number[i];
      }
      else {
        acumulador = acumulador + "#";
      }
    }
    return acumulador;
  }
};

export default validator;


