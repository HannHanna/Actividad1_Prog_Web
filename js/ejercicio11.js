const inputKilometros = document.getElementById('kilometros');
const inputMillas = document.getElementById('millas');
const btnConvertir = document.getElementById('btn-convertir');

btnConvertir.addEventListener('click', function() {
    let valorKilometros = inputKilometros.value.trim();
    valorKilometros = valorKilometros.replace(',', '.');

    if (isNaN(valorKilometros) || valorKilometros === "") {
        alert("Introduce solo números válidos.");
        inputKilometros.value = "";
        inputKilometros.focus();
        return;
    }

    let k = parseFloat(valorKilometros);
    let m = k * 0.621371;

    let numeroRedondeado = m.toFixed(5);
    let textoFinal = numeroRedondeado + " mi";
    inputMillas.value = textoFinal;
});