let readlineSync = require("readline-sync");
let numero = new Array (5);
let indice = 0;
while (indice <6){
numero = readlineSync.questionInt("Ingrese numero:");
console.log("El numero en la posicion", indice, "es", numero);
indice++;
}