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
function editarTarea(nombre) {
    let task = tarea.includes(nombre)
    if (task == true) {
        const regex = /^\S+$/;
        let nuevoNom = prompt("Ingrese un nombre nuevo para la tarea:")
        if (regex.test(nuevoNom)){
            tarea.splice(tarea.indexOf(nombre),1,nuevoNom)
            alert("El nombre nuevo es: "+nuevoNom)
        } else {
            alert("El nombre nuevo no debe contener espacios!")
            }
        } else {
            alert("Nombre invalido, intente de nuevo!")
        }
}

function eliminarTarea(nombre) {
    let task = tarea.includes(nombre)
    if (task == true) {
        tarea.splice(tarea.indexOf(nombre), 1)
    } else {
        alert("Ese nombre no se encuentra en la lista.")
    }
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
            editarTarea(prompt("Ingrese el nombre de la tarea que quiere editar: "+ tarea));
            break;
        case 4:
            eliminarTarea(prompt("Ingrese el nombre del valor que quiere eliminar: "+ tarea));
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