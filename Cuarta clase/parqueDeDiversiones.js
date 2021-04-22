//Declaro variables
let readlineSync = require("readline-sync");
let alturaMinima = readlineSync.questionFloat("Ingrese la altura de la persona:");
if (alturaMinima>=1.30){
console.log("La persona tiene la altura permitida para ingresar");
}else{
console.log("La persona no tiene la altura permitida para ingresar");
}