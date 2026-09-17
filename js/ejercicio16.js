const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(tipo) {
    const inputNum1 = document.getElementById('numero1');
    const inputNum2 = document.getElementById('numero2');
    const inputResultado = document.getElementById('resultado');

    let val1 = inputNum1.value.trim();
    let val2 = inputNum2.value.trim();

    val1 = val1.replace(',', '.');
    val2 = val2.replace(',', '.');

    if (isNaN(val1) || val1 === "" || isNaN(val2) || val2 === "") {
        alert("Introduce solo números válidos en ambos campos.");
        return;
    }

    let a = parseFloat(val1);
    let b = parseFloat(val2);
    let res;

    if (tipo === 'sumar') {
        res = sumar(a, b);
    } else if (tipo === 'restar') {
        res = restar(a, b);
    } else if (tipo === 'multiplicar') {
        res = multiplicar(a, b);
    } else if (tipo === 'dividir') {
        res = dividir(a, b);
    }

    inputResultado.value = res;
}