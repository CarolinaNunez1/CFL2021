let readlineSync = require("readline-sync");
let nombreUsuario = ("Juan");
let contrasenaUsuario = ("claveJuan");
let ingreseUsuario = readlineSync.question("Ingrese nombre del usuario:");
let ingreseContrasenaUsuario = readlineSync.question("Ingrese contrasena del usuario:");
if(nombreUsuario == ingreseUsuario && contrasenaUsuario == ingreseContrasenaUsuario){
console.log("Puede ingresar al sistema");
}else{
console.log("No puede ingresar al sistema");
}