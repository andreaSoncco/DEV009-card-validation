import validator from './validator.js';



const btnBanca = document.getElementById("btnBanca");
btnBanca.addEventListener("click", Banca);

function Banca() {
  document.getElementById("pagina0").style.display = "none";
  document.getElementById("pagina1").style.display = "block";
}



const btnContinuar = document.getElementById("btnContinuar");
btnContinuar.addEventListener("click", validar);


function validar() {
  document.getElementById("pagina1").style.display = "none";
  document.getElementById("pagina2").style.display = "block";
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;
  const resto = validator.isValid(numeroTarjeta)
  //Operador ternario
  const resultado = (resto) ? "Tu número de tarjeta es válido" : "Tu número de tarjeta no es válido";
  const info = (resto) ? "Adelante podrás acceder a tu Estado de Cuenta" : "No podras acceder a tu Estado de Cuenta";
  const respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = resultado;

  const acumulador = validator.maskify(numeroTarjeta);
  const respuesta1 = document.getElementById("respuesta1");
  respuesta1.innerHTML = acumulador;

  const respuesta2 = document.getElementById("respuesta2");
  respuesta2.innerHTML = info;
}

/*function Maskify(numeroTarjeta) {
    let acumulador="";
    for (let i = 0; i < numeroTarjeta.length; i++) {
        if (i>11) {
            acumulador = acumulador + numeroTarjeta[i];
        }
        else {
            acumulador = acumulador + "#";
        }
    }
    
    return acumulador;
    alert(acumulador);
} */