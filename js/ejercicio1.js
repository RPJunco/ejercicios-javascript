// Conversión de Temperaturas

// Declaracion de variables
let temperatura = 0.0;
let mensajeTemperatura = "";

// Funciones para el calculo de temperatura
function calcularTemperaturaEnFahrenheit(temperatura, mensajeTemperatura = ""){

    temperatura = temperatura * 1.80 + 32.0;

    // Determinar nivel de temperatura en Fahrenheit
    if (temperatura > 85){
        mensajeTemperatura = `La temperatura ${temperatura}° en grados Fahrenheit es alta`
    }else {
        if (temperatura < 32){
            mensajeTemperatura = `La temperatura ${temperatura}° en grados Fahrenheit es baja`
        }else {
            mensajeTemperatura = `La temperatura ${temperatura}° en grados Fahrenheit es moderada`
        }
    }

    return mensajeTemperatura;
}

// Mostrar los resultados por consola
console.log(calcularTemperaturaEnFahrenheit(5));
console.log(calcularTemperaturaEnFahrenheit(20))
console.log(calcularTemperaturaEnFahrenheit(10));