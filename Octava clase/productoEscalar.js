let readlineSync = require("readline-sync");
let length = readlineSync.questionInt("Ingrese el valor de la dimension:");
let v1 = new Array (length);
let v2 = new Array (length);
let resultado = new Array (length);
let escalada = 0;
let indice = 0;
for (indice = 0; indice <length; indice ++){
v1  [indice] = readlineSync.questionInt("Ingrese numero:");
}
console.log("Ud. ingreso los siguientes numeros"+ v1);
for (indice = 0; indice <length; indice++){
v2  [indice] = readlineSync.questionInt("Ingrese el numero:");
}
console.log("Ud. ingreso los siguientes numeros" + v2);
for (indice = 0; indice <length; indice++){
resultado [indice] = (v1  [indice] * v2  [indice] );
escalada += resultado [indice];
}
console.log("La suma de sus numeros es:"+ escalada);