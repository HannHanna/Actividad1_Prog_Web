// Capturar elementos del DOM
const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const btnConvertir = document.getElementById('btn-convertir');

// Agregar evento de clic al botón
btnConvertir.addEventListener('click', function() {
    let valorCelsius = inputCelsius.value.trim();

    // 1. Verificar que el campo no esté vacío
    if (valorCelsius === "") {
        alert("Por favor, ingresa un valor en grados Celsius.");
        inputCelsius.focus();
        return;
    }

    // Reemplazar la coma por punto por si el usuario ingresa decimales con coma (ej. 25,5)
    valorCelsius = valorCelsius.replace(',', '.');

    // 2. Verificar que el valor ingresado sea numérico
    if (isNaN(valorCelsius)) {
        alert("El valor ingresado no es válido. Por favor, introduce solo números.");
        inputCelsius.value = "";
        inputCelsius.focus();
        return;
    }

    // Convertir a número float
    let c = parseFloat(valorCelsius);

    // 3. Realizar el cálculo de Celsius a Fahrenheit: F = (C * 9/5) + 32
    let f = (c * 9/5) + 32;

    // 4. Mostrar el resultado en la caja de texto con formato de grados Fahrenheit
    inputFahrenheit.value = f.toFixed(2) + " °F";
});