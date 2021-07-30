let readlineSync = require("readline-sync");
let indice, resultado;
let length = readlineSync.question("Ingrese el valor de la dimension:"); 
function cargarArray (length){
   let v = new Array (length);
   for (indice = 0; indice < length; indice++){
      v [indice] = readlineSync.questionInt("Ingrese un numero:");
   } 
   return v;
}
function escalarArray (v1, v2, length){
   let escalada = 0;
   for (indice = 0; indice <length; indice++){
      escalada = escalada + (v1 [indice] * v2 [indice]);
   } 
   return escalada;
}

let v1 = cargarArray (length);
console.log("Ud. ingreso los siguientes numeros en el primer arreglo:"+ v1);
let v2 = cargarArray (length);
console.log("Ud. ingreso los siguientes numeros en el segundo arreglo:"+ v2);
resultado = escalarArray (v1, v2, length);
console.log("El resultado de escalar sus vectores es:"+ resultado);