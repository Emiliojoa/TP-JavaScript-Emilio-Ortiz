
let i;
let r=1;
while (r !==0 ) {
    i = parseInt(prompt(`Que quiere hacer \n
    1. Agregar tarea \n
    2. lista de tarea \n
    3. editar tarea \n
    4. eliminar tarea \n
    0. salir \n`)); 
switch (i) {
    case 1:
        console.log("agregar tarea");
        break;
    case 2:
        console.log("lista de tarea");
        break;
    case 3:
        console.log("editar tarea");
        break;
    case 4:
        console.log("eliminar tarea");
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