let readlineSync = require("readline-sync");
let i;
for (i = 1; i <= 100; i++){
 if (i %2 == 0 || i %3 == 0){
 console.log(i, "es multiplo de 2 o 3");
 }
}