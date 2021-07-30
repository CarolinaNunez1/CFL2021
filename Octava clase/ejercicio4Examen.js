let readlineSync = require("readline-sync");
let dia = readlineSync.questionInt("Ingrese dia:");
let mes = readlineSync.questionInt("Ingrese numero de mes: ");
let anio = readlineSync.questionInt("Ingrese anio:");
let diaFinal = readlineSync.questionInt("Ingrese dia final:");
let mesFinal = readlineSync.questionInt("Ingrese numero de mes final:");
let anioFinal = readlineSync.questionInt("Ingrese anio final:");
let resultado;
function bisiesto (anio,length){
    for (let i = 0; i< length; i++);
    if (anio){
    anio!= 2020, 2024,2028;
    console.log("No es bisiesto");
    }else{
        console.log("es bisiesto");
    }
    return anio
}
function diferenciaFechas (dia, mes, anio, length){
    for (let i=0; i<length; i++);
    calculoFechas  = dia - diaFinal; mes - mesFinal; anio - anioFinal;
return calculoFechas
}
console.log ("El anio que ingresaste es"+ anio, anioFinal);
anio = bisiesto;
resultado = diferenciaFechas;
console.log("Los dias que hay entre esas fechas son:"+calculoFechas);