let readlineSync = require("readline-sync");
let precioDelProducto = readlineSync.questionInt("Ingrese precio del producto:");
let descuentoSobreElProducto = readlineSync.questionInt("Ingrese descuento sobre el producto:");
console.log("Precio final del producto con el descuento:", precioDelProducto*(100-descuentoSobreElProducto)/100);