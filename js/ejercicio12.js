const inputPesos = document.getElementById('pesos');
const inputDolares = document.getElementById('dolares');
const btnConvertir = document.getElementById('btn-convertir');

btnConvertir.addEventListener('click', function() {
    let valorPesos = inputPesos.value.trim();
    valorPesos = valorPesos.replace(',', '.');

    if (isNaN(valorPesos) || valorPesos === "") {
        alert("Introduce solo números válidos.");
        inputPesos.value = "";
        inputPesos.focus();
        return;
    }

    let mxn = parseFloat(valorPesos);
    let tasaCambio = 0.055;
    let usd = mxn * tasaCambio;

    let numeroRedondeado = usd.toFixed(2);
    let textoFinal = numeroRedondeado + " USD";
    inputDolares.value = textoFinal;
});