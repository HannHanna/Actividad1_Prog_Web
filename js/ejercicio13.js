const inputEdad = document.getElementById('edad');
const inputResultado = document.getElementById('resultado');
const btnVerificar = document.getElementById('btn-verificar');

btnVerificar.addEventListener('click', function() {
    let valorEdad = inputEdad.value.trim();
    valorEdad = valorEdad.replace(',', '.');

    if (isNaN(valorEdad) || valorEdad === "" || valorEdad < 0) {
        alert("Introduce una edad válida y positiva.");
        inputEdad.value = "";
        inputEdad.focus();
        return;
    }

    let edad = parseFloat(valorEdad);
    let mensaje;

    if (edad >= 18) {
        mensaje = "Puedes votar";
    } else {
        mensaje = "No puedes votar";
    }

    inputResultado.value = mensaje;
});