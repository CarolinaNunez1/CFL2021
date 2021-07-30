let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("Ingrese el primer numero:");
let segundoNumero = readlineSync.questionInt("Ingrese el segundo numero:");
let tercerNumero = readlineSync.questionInt("Ingrese el tercer numero:");
if(tercerNumero>primerNumero && tercerNumero>segundoNumero){
console.log("El numero", tercerNumero, "es el mayor");
}else if(segundoNumero>primerNumero && segundoNumero>tercerNumero){
console.log("El numero", segundoNumero,"es el mayor");
}else if(primerNumero>segundoNumero && primerNumero>tercerNumero){
console.log("El numero", primerNumero, "es el mayor");
}