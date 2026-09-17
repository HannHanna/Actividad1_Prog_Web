const gestionarTareas = (() => {
    let scopeGlobalVariable = "Scope Global / LocalStorage Manager";

    const obtenerTareas = () => {
        let tareasStorage = localStorage.getItem('mis_tareas');
        return tareasStorage ? JSON.parse(tareasStorage) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem('mis_tareas', JSON.stringify(tareas));
    };

    return {
        agregarTarea: (textoTarea) => {
            let scopeLocalVariable = textoTarea;
            let tareas = obtenerTareas();
            tareas.push(scopeLocalVariable);
            guardarTareas(tareas);
        },
        eliminarTarea: (indice) => {
            let tareas = obtenerTareas();
            tareas.splice(indice, 1);
            guardarTareas(tareas);
        },
        listarTareas: () => {
            return obtenerTareas();
        }
    };
})();

const inputTarea = document.getElementById('nueva-tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareasHTML = document.getElementById('lista-tareas');

function renderizarTareas() {
    listaTareasHTML.innerHTML = "";
    let tareas = gestionarTareas.listarTareas();

    tareas.forEach((tarea, indice) => {
        let li = document.createElement('li');
        li.className = 'item-tarea';

        let span = document.createElement('span');
        span.textContent = tarea;

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'boton-eliminar';
        
        btnEliminar.onclick = () => {
            if (confirm("¿Estás seguro de eliminar esta tarea?")) {
                gestionarTareas.eliminarTarea(indice);
                renderizarTareas();
            }
        };

        li.appendChild(span);
        li.appendChild(btnEliminar);
        listaTareasHTML.appendChild(li);
    });
}

btnAgregar.addEventListener('click', () => {
    let texto = inputTarea.value.trim();

    if (texto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    gestionarTareas.agregarTarea(texto);
    inputTarea.value = "";
    inputTarea.focus();
    renderizarTareas();
});

window.onload = () => {
    renderizarTareas();
};