let readlineSync = require('readline-sync');
let length = readlineSync.question("Ingrese el valor de la dimension:");
let resultado, indice;
function cargarTexto (length){
    let texto  = new Array (length);
    for(indice = 0; indice < length; indice++ ){
         texto [indice] = readlineSync.question("Ingrese un texto:");
    }
    return texto;
}
function contarLetras (cantidadLetras, length){
    for (indice = 0; indice < length; indice++){
        cantidadLetras = length;
    }
    return cantidadLetras;
}
let texto = cargarTexto (length);
console.log("Ud. ingreso el siguiente texto: "+ texto);
resultado = contarLetras (cantidadLetras, length);
console.log("El total de las letras es:"+ cantidadLetras);