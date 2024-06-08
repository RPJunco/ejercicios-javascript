// Determinación de Números Primos

// Declaracion de variables

let numero = 0;

// Funcion para el determinar si el numero ingresado es primo
function esPrimo(numero) {

    // Numeros menores que 2 no son primos
    if (numero <= 1){
        return false;
    }
    // El numero 2 es el unico numero par primo
    else if(numero === 2){
        return true;
    }
    // Los numeros pares se descartan
    else if (numero % 2 === 0){
        return false;
    }
    
    // Se declara una variable que sera utilizada para ser comparada e incrementada en el ciclo
    let i = 3;
    // Se declara una variable que representa la raiz cuadrada del numero analizado
    let raizCuadrada = Math.sqrt(numero);
    // En el ciclo determinamos si el numero ingresado es divisible por si mismo. Caso contrario se devuelve false.
    while (i <= raizCuadrada){
        if (numero % 1 === 0){
            return false;
        }
        i += 2
    }
    return true;
}

// Funcion para mostrar un mensaje informando si el numero es primo o no
function determinarNumeroPrimo(numero){
    if( esPrimo(numero) ){
        return `El numero ${numero} es primo`
    }
    else {
        return `El numero ${numero} no es primo`
    }

}


// Mostrar por consola si un numero es primo o no
console.log(determinarNumeroPrimo(0));
console.log(determinarNumeroPrimo(2));
console.log(determinarNumeroPrimo(4));
console.log(determinarNumeroPrimo(7));
