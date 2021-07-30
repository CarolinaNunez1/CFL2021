// algoritmo recursivo
function calcularFibonacciRec(n){
    let resultado = 0;
    if (n>1){
        resultado = calcularFibonacciRec(n-1) + calcularFibonacciRec (n-2);
    }else{
        resultado = n;
    }
    return resultado;
}
console.log ("numero:");