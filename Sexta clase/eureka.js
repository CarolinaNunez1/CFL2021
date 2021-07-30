let readlineSync =require('readline-sync');
let contador = 1;
let clave = readlineSync.question("Ingrese la clave:");
while (contador <=2 && clave !="eureka") {
    clave =readlineSync.question("Introduzca nuevamente la clave:");
    contador ++;
}
if (contador ==3 && clave != "eureka") {
    console.log("Ud. agoto todas las posibilidades");
}