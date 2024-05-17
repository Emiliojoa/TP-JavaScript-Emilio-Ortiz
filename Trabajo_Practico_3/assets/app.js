function agregarTarea(nombre) {
    const regex = /^\S+$/;
    if (regex.test(nombre)){

    tarea.push(prompt("ingrese la nueva tarea: "));
    alert("tarea añdida \n" + tarea);
    }else{
        alert("No se puede ingresar espacios en blanco")
    }
}
    function listaTarea() {
        let lista="  ";
    for( e = 0; e < tarea.length; e++){
        lista += tarea[e] + " , ";
        console.log(lista );
    }
    }
    function editarTarea(tarea) {
    let posicion = parseInt(prompt("ingrese la posicion de la tarea a editar"));
    tarea[posicion] = prompt("ingrese la nueva tarea");
    alert("tarea editada \n" + tarea);
    }
    function eliminarTarea(tarea) {
    let posicion = parseInt(prompt("ingrese la posicion de la tarea a eliminar"));
    tarea.splice(posicion, 1);
    console.log("tarea eliminada \n" + tarea);
    }
let tarea=[];
let i;
let r=1;
while (r !==0 ) {
    i = parseInt(prompt(`Que quiere hacer
    1. Agregar tarea 
    2. lista de tarea 
    3. editar tarea 
    4. eliminar tarea 
    0. salir `)); 
switch (i) {
    case 1:
        agregarTarea();
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
        console.log("salir");
        r=0;
        break;
    default:
        console.log("ingrese una opcion valida");
        break;
}
}