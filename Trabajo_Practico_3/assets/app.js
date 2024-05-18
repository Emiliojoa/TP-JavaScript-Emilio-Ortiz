function agregarTarea(nombre) {
    const regex = /^\S+$/;
    if (regex.test(nombre)) {
        tarea.push(nombre);
        alert("Tarea añadida:\n" + nombre);
    } else {
        alert("No se puede ingresar espacios en blanco.");
    }

}

function listaTarea() {
    let lista = "  ";
    for (e = 0; e < tarea.length; e++) {
        if (e == tarea.length - 1) {
            lista += tarea[e] + ".";
        } else {
            lista += tarea[e] + ", ";
        }
    }
    alert(lista);
}
function editarTarea(tarea) {
    let posicion = parseInt(prompt("Ingrese la posición de la tarea a editar"));
    let nombre = prompt("Ingrese la nueva tarea");
    const regex = /^\S+$/;
    if (regex.test(nombre)) {
        tarea.splice(posicion, 1, nombre);
        alert("Tarea editada:\n" + nombre);
    } else {
        alert("No se puede ingresar espacios en blanco.");
    }
}

function eliminarTarea(tarea) {
    let posicion = parseInt(prompt("Ingrese la posicion de la tarea a eliminar"));
    const TAREA_ELIMINADA = tarea.splice(posicion, 1);
    alert("Tarea eliminada \n" + TAREA_ELIMINADA);
}
let tarea = [];
let i;
let r = 1;
while (r !== 0) {
    i = parseInt(prompt(`¿Que quiere hacer?
    1. Agregar tarea 
    2. Lista de tarea 
    3. Editar tarea 
    4. Eliminar tarea 
    0. Salir` ));
    switch (i) {
        case 1:
            agregarTarea(prompt("Ingrese el nombre de la tarea"));
            break;
        case 2:
            listaTarea(tarea);
            break;
        case 3:
            editarTarea(tarea);
            break;
        case 4:
            eliminarTarea(tarea);
            break;
        case 0:

            r = 0;
            break;
        default:
            console.log("Ingrese una opcion valida");
            break;
    }
}

alert("Gracias por utilizar el programa")