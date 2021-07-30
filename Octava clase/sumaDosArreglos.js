let readlineSync = require("readline-sync");
let v1 = new Array (6);
let v2 = new Array (6);
let vSuma = new Array (6);
let indice = 0;
for (indice = 0; indice <6; indice ++){
v1  [indice] = readlineSync.questionInt("Ingrese numero:");
console.log("El numero en la posicion", indice, "es", v1);
}
for (indice = 0; indice <6; indice++){
v2  [indice] = readlineSync.questionInt("Ingrese el numero:");
console.log("El numero en la posicion", indice, "es", v2);
}
for (indice = 0; indice <6; indice++){
vSuma  [indice] = (v1  [indice] + v2  [indice] );
console.log("La suma de los dos arreglos es:", vSuma  [indice] );
}