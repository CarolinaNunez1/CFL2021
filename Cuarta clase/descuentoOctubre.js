let readlineSync = require("readline-sync");
let precioUnitario = readlineSync.questionFloat("Ingrese el precio unitario:");
let precioConDescuento;
let descuento;
let cantidad = readlineSync.question("Ingrese cantidad:");
let precioTotal = (precioUnitario * cantidad);
let mes = readlineSync.question("Ingrese el mes:");
if(mes== "Octubre"){
descuento = (precioTotal*15)/100;
precioConDescuento = (precioTotal - descuento);
console.log("Por realizar su compra en el mes de Octubre tiene un 15% de descuento");
console.log("El total a pagar es:", precioConDescuento);
}else{
console.log("No tiene descuento, el total a pagar es:", precioTotal);
}