// Operaciones Aritméticas Básicas

// Declaracion de variables numericas

let numeroUno = Number();
let numeroDos = Number();
let numeroTres = Number();


function determinarMayor(numeroUno, numeroDos, numeroTres){

    // Declaracion de variables para las operaciones aritméticas
    let suma = 0;
    let resta = 0;
    let producto = 0;
    
    // Calculo de la suma, resta y producto
    
    suma = numeroUno + numeroDos + numeroTres;
    resta = numeroUno - numeroDos - numeroTres;
    producto = numeroUno * numeroDos * numeroTres;
    
    // Determinar cual es el mayor
    
    if (suma > resta && suma > producto) {
        return `El mayor de los tres es dado por la suma y es el valor: ${suma}`;
    }
    else if (resta > producto && resta > suma) {
        return `El mayor de los tres es dado por la resta y es el valor: ${resta}`;
    }
    else if(producto > resta && producto > suma){
        return `El mayor de los tres es dado por la producto y es el valor: ${producto}`;
    }
    // En esta rama vemos que como no se cumplieron las anteriores condiciones la unica posibilidad que queda es que los tres resultados tengan el mismo valor
    else{
        return `El valor de los tres resultados es el mismo, por lo tanto el valor mayor es: ${suma}`;
    }
}


// Mostrar el resultado por consola

console.log(determinarMayor(0, 2, 1)); 
console.log(determinarMayor(100, 0, 1)); 
console.log(determinarMayor(3, 5, 2)); 
console.log(determinarMayor(0, -2, 2));