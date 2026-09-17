let listaEstudiantes = [];

const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const btnAgregar = document.getElementById('btn-agregar');
const btnCalcular = document.getElementById('btn-calcular');

const inputPromedio = document.getElementById('promedio');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');

btnAgregar.addEventListener('click', function() {
    let nombreTexto = inputNombre.value.trim();
    let calificacionTexto = inputCalificacion.value.trim();
    calificacionTexto = calificacionTexto.replace(',', '.');

    if (nombreTexto === "" || calificacionTexto === "") {
        alert("Por favor, llena ambos campos.");
        return;
    }

    if (isNaN(calificacionTexto)) {
        alert("La calificación debe ser un número válido.");
        inputCalificacion.value = "";
        inputCalificacion.focus();
        return;
    }

    let nuevoEstudiante = {
        nombre: nombreTexto,
        calificacion: parseFloat(calificacionTexto)
    };

    listaEstudiantes.push(nuevoEstudiante);

    alert("Estudiante agregado correctamente.");
    inputNombre.value = "";
    inputCalificacion.value = "";
    inputNombre.focus();
});

btnCalcular.addEventListener('click', function() {
    if (listaEstudiantes.length === 0) {
        alert("Primero debes agregar al menos un estudiante.");
        return;
    }

    let suma = listaEstudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = suma / listaEstudiantes.length;

    let calificaciones = listaEstudiantes.map(e => e.calificacion);
    let maxCalificacion = Math.max(...calificaciones);
    let minCalificacion = Math.min(...calificaciones);

    let estudianteMax = listaEstudiantes.find(e => e.calificacion === maxCalificacion);
    let estudianteMin = listaEstudiantes.find(e => e.calificacion === minCalificacion);

    inputPromedio.value = promedio.toFixed(2);
    inputMayor.value = estudianteMax.nombre + " (" + estudianteMax.calificacion + ")";
    inputMenor.value = estudianteMin.nombre + " (" + estudianteMin.calificacion + ")";
});