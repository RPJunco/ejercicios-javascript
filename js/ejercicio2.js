// Calculo del IMC

// Declaracion de variables
let pesoEnKg = 0.0;
let alturaEnMts = 0.0;
let mensajeIMC = "";

// Funciones para el calculo del IMC
function calcularIMC(pesoEnKg, alturaEnMts, mensajeIMC = "") { 
    let imc = 0.0;
    imc = Math.round(pesoEnKg / alturaEnMts**2)
    
    // Determinar la calsificacion del IMC
    if ( imc < 18.5 ) {
        mensajeIMC = `Paciente con un IMC ${imc} cuenta con un peso bajo`
    }
    else if ( imc >= 18.5 && imc <= 24.9 ) {
        mensajeIMC = `Paciente con un IMC ${imc} cuenta con un peso normal`
    }else if ( imc >= 25 && imc <= 29.9 ) {
        mensajeIMC = `Paciente con un IMC ${imc} cuenta con sobrepeso`
    }else if ( imc >= 30 ){
        mensajeIMC = `Paciente con un IMC ${imc} cuenta con obesidad`
    }

    return mensajeIMC
}

// Mostrar los resultados por consola
console.log(calcularIMC(60.0, 1.9))
console.log(calcularIMC(65.0, 1.70))
console.log(calcularIMC(100.0, 1.85))
console.log(calcularIMC(80.0, 1.60))