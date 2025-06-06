// Seleccionar los elemento x id del DOM: ingresar-tarea, boton-agregar y lista-tareas
const ingresar = document.getElementById('ingresar-tarea');
const Agregar = document.getElementById('boton-agregar');
const lista = document.getElementById('lista-tareas');



// Obtener tareas del localStorage
function obtenerTareasLocalStorage() {
    return JSON.parse(localStorage.getItem('tareas'));

}

// Guardar tareas en localStorage
function guardarTareasLocalStorage(tareas) {
    localStorage.setItem('tareas',JSON.stringify(tareas));
}

// Renderizar la lista de tareas en el DOM
function mostrarTareas() {
    lista.innerHTML = ''; // Ingresar al elemento del html
    const tareas = obtenerTareasLocalStorage

}

// Marcar la Tarea como completada
function mostrarTareas() {
    lista.innerHTML = '';
    const tareas = obtenerTareasLocalStorage();

    if (!tareas) return;

    tareas.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('tarea');
        if (item.completada) li.classList.add('completada');
        li.textContent = item.texto;

        const contenedorBotones = document.createElement('div');

        const btnCompletar = document.createElement('button');
        btnCompletar.textContent = '✔️';
        btnCompletar.classList.add('btn_ok');
        btnCompletar.onclick = () => {
            tareas[index].completada = !tareas[index].completada;
            guardarTareasLocalStorage(tareas);
            mostrarTareas();
        };

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = '❌';
        btnEliminar.classList.add('btn_eliminar');
        btnEliminar.onclick = () => {
            tareas.splice(index, 1);
            guardarTareasLocalStorage(tareas);
            mostrarTareas(); 
        };


        contenedorBotones.appendChild(btnCompletar);
        contenedorBotones.appendChild(btnEliminar);

        li.appendChild(contenedorBotones);
        lista.appendChild(li);
        
    });
    
}

// Eliminar la Tarea correspondiente
function eliminarTarea(index) {
    const tareas = obtenerTareasLocalStorage();
    tareas.splice(index, 1);
    guardarTareasLocalStorage(tareas);
    mostrarTareas();
    
}

// Crear una nueva Tarea
function nuevaTarea() {
    const nuevaTareaTexto = ingresar.value.trim();
    if (nuevaTareaTexto === '') return;

    const tareas = obtenerTareasLocalStorage() || []; 
    tareas.push({ texto: nuevaTareaTexto, completada: false });
    guardarTareasLocalStorage(tareas);
    ingresar.value = '';
    mostrarTareas();

}
  
// Escuchar el boton Agregar y en el evento click llamar a nuevaTarea
Agregar.addEventListener('click', nuevaTarea);


// Escuchar el inputTarea y en el evento keypress con la tecla Enter 

ingresar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        nuevaTarea();
    }
});
// llamar a nuevaTarea

nuevaTarea();

// Cargar tareas al iniciar con mostrarTareas
mostrarTareas();

