// Cálculo del Descuento

// Declaracion de variables

let precioInicialProducto = 0.0;

// Definimos las funciones para calcular el descuento de acuerdo al precio inicial del producto y por ultimo devolver una cadena con el nuevo precio obtenido

function calcularPrecioFinal(precioInicialProducto){

    if (precioInicialProducto > 100){
        precioInicialProducto -= ((precioInicialProducto * 10) / 100);
    }
    else if (precioInicialProducto >= 50 && precioInicialProducto <= 100){
        precioInicialProducto -= ((precioInicialProducto * 5) / 100);
    }
    else if (precioInicialProducto < 50){
        precioInicialProducto = precioInicialProducto;
    }
    return `El precio final del producto es: ${precioInicialProducto}$`
}

// Mostrar los resultados por consola

console.log(calcularPrecioFinal(150));
console.log(calcularPrecioFinal(110));
console.log(calcularPrecioFinal(60));
console.log(calcularPrecioFinal(50));
console.log(calcularPrecioFinal(10));
