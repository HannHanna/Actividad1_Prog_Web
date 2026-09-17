const inputNumeros = document.getElementById('numeros');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');
const inputPromedio = document.getElementById('promedio');
const btnCalcular = document.getElementById('btn-calcular');

btnCalcular.addEventListener('click', function() {
    let valorTexto = inputNumeros.value.trim();

    if (valorTexto === "") {
        alert("Por favor, ingresa algunos números.");
        inputNumeros.focus();
        return;
    }

    let arregloTexto = valorTexto.split(",");
    let numeros = arregloTexto.map(Number);

    let hayError = false;
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            hayError = true;
            break;
        }
    }

    if (hayError) {
        alert("Los valores ingresados no son válidos. Usa solo números separados por comas.");
        inputNumeros.value = "";
        inputNumeros.focus();
        return;
    }

    let numeroMayor = Math.max(...numeros);
    let numeroMenor = Math.min(...numeros);

    let suma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
    let promedio = suma / numeros.length;

    inputMayor.value = numeroMayor;
    inputMenor.value = numeroMenor;
    inputPromedio.value = promedio.toFixed(2);
});