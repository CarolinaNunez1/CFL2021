let readlineSync = require("readline-sync");
let indice, resultado;
let numTabla1 = readlineSync.questionInt("Primer numero:");
let numTabla2 = readlineSync.questionInt("Segundo numero:");
for (indice = 1; indice <= numTabla2; indice ++) {
    resultado = numTabla1 * indice;
    console.log("El resultado de sus numeros es:", resultado);
}