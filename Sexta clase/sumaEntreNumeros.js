let readlineSync = require("readline-sync");
let num1 = readlineSync.questionInt("Ingrese el primer numero:");
let num2 = readlineSync.questionInt("Ingrese el segundo numero:");
let suma = 0;
let resultado = num1;
for (num1 = resultado; num2 >=resultado; resultado++){
suma = suma + resultado;
}
console.log("El resultado de la suma es", suma);