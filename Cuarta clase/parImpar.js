let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Ingrese el numero:");
if(numero == 0){
console.log("El", numero, "no es par ni impar");
}else if(numero %2 == 0){
console.log("El", numero, "es par");
}else{
console.log("El", numero, "es impar");
}