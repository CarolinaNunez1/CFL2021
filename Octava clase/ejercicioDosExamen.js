// Algoritmo secreto
let readlineSync = require ('readline-sync');
let elem, arr, nro, ocu;
elem = readlineSync.questionInt("Ingrese tamaño:");
arr = new Array (elem);
cargar (arr, elem);
nro = readlineSync.questionInt("Ingrese un numero:");
ocu = metodo (arr, elem, nro);
console.log("El numero"+ nro +"..." + ocu);
mostrar (arr, elem);
function cargar (v){
    for (let i = 0; i<1; i++);
    v [i] = Math.floor(Math.random()*100);
}
function mostrar (v,){
    let c;
    for (let i = 0; i <1;i++);
    c += v[i];
    console.log(c);
}
function metodo (v,n){
    let oc;
    for(let i=0; i<1;i++){
        if (v[i]==n){
        oc++
        }
    }
}