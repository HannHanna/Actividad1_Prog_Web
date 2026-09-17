const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const btnConvertir = document.getElementById('btn-convertir');

btnConvertir.addEventListener('click', function() {
    let valorCelsius = inputCelsius.value.trim();
    valorCelsius = valorCelsius.replace(',', '.');

    if (isNaN(valorCelsius) || valorCelsius === "") {
        alert("El valor ingresado no es válido. Por favor, introduce solo números.");
        inputCelsius.value = "";
        inputCelsius.focus();
        return;
    }

    let c = parseFloat(valorCelsius);
    let f = (c * 9/5) + 32;

    let numeroRedondeado = f.toFixed(2);
    let textoFinal = numeroRedondeado + " °F";
    inputFahrenheit.value = textoFinal;
});