let readlinSync = require("readline-sync");
let cantidadNiños = readlinSync.questionInt("Ingrese la cantidad de niños en el equipo:");
let edades = new Array (cantidadNiños);
let indice = 0;
let promedio = 0;
function aleatorio (min,max)){
    return Math.floor (Math.random()) * (max - min + 1) + min;
}
function cargarArray 