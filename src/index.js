import validator from './validator.js';

console.log(validator);

let btnBanca = document.getElementById("btnBanca");
btnBanca.addEventListener("click", Banca);

function Banca() {
    document.getElementById("pagina0").style.display = "none";
    document.getElementById("pagina1").style.display = "block";
 }



let btnContinuar = document.getElementById("btnContinuar");
btnContinuar.addEventListener("click", Continuar);

function Continuar() {
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
    let numeroTarjeta = document.getElementById("numeroTarjeta").value;
    let numeroInvertido = numeroTarjeta.split("").reverse();

    for (let i = 0; i<numeroInvertido.length; i++){
        if (i % 2 != 0){
            numeroInvertido[i]*=2;
            if (numeroInvertido[i]>=10) {
                numeroInvertido[i]-=9;
            }
                }
    }
  
    let sum = 0;
    for (let t = 0; t<numeroInvertido.length; t++) {
        sum += parseInt(numeroInvertido[t]);
    }

    let resto = sum % 10 == 0;
    let resultado = (resto) ? "Tu número de tarjeta es válido" : "Tu número de tarjeta no es válido" ;
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = resultado;
    alert(resultado);
}