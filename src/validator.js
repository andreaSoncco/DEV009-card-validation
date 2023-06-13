const validator = {
  isValid: function (number) {
    const numeroInvertido = number.split("").reverse();

    for (let i = 0; i < numeroInvertido.length; i++) {
      if (i % 2 !== 0) {
        numeroInvertido[i] *= 2;
        if (numeroInvertido[i] >= 10) {
          numeroInvertido[i] -= 9;
        }
      }
    }

    let sum = 0;
    for (let t = 0; t < numeroInvertido.length; t++) {
      sum += parseInt(numeroInvertido[t]);
    }

    const resto = sum % 10 === 0;
    return resto;
  },
  maskify: function (number) {
    let acumulador = "";
    for (let i = 0; i < number.length; i++) {
      if (i > 11) {
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


