let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Ingrese un numero:");
while(numero == 0){ 
console.log("Ingrese otro numero entero, mayor a cero");
numero = readlineSync.questionInt("Ingrese otro numero:");
}  
if(numero %2 == 0){
console.log("El", numero, "es par");
}else{
console.log("El", numero,"es impar");
}