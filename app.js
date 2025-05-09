// Seleccionar los elemento x id del DOM: ingresar-tarea, boton-agregar y lista-tareas
const ingresarTarea = document.getElementById('ingresar-tarea');
const botonAgregar = document.getElementById('boton-agregar');
const listaTareas = document.getElementById('lista-tareas');



// Obtener tareas del localStorage
function obtenerTareasLocalStorage() {
    return JSON.parse(localStorage.getItem('tareas'));

}

// Guardar tareas en localStorage
function guardarTareasLocalStorage(tareas) {
    
}

// Renderizar la lista de tareas en el DOM
function mostrarTareas() {
}

// Marcar la Tarea como completada
function completarTarea(index) {
}

// Eliminar la Tarea correspondiente
function eliminarTarea(index) {
}

// Crear una nueva Tarea
function nuevaTarea() {
}
  
// Escuchar el boton Agregar y en el evento click llamar a nuevaTarea

// Escuchar el inputTarea y en el evento keypress con la tecla Enter 
// llamar a nuevaTarea

// Cargar tareas al iniciar con mostrarTareas

