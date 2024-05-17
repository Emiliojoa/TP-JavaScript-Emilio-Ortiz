// Material de ayuda para resolver la actividad practica.

// Funciones
// las funciones en JavaScript son como pequeñas cajas que contienen un conjunto de instrucciones 
// que pueden ser ejecutadas en cualquier momento.

// Aquí, sumar es el nombre de la función. a y b son los parámetros que la función espera recibir, y return a + b es 
function sumar(a, b) {
    return a + b
}

// lo que la función devuelve cuando es llamada. Entonces, si llamas a la función sumar(3, 5), devolverá 8, porque suma 3 y 5. 
sumar(3, 5) // 8

// Expresiones regulares

// Expresion regular que valida que no contenga espacios en blanco al principio o al final ni que este vacio.
const regex = /^\S+$/;

// Se utiliza el metodo test y se le pasa como parametro la variable o texto a evaluar.
// Si cumple con la expresion regular devolvera como resultado un booleano true, caso contrario false.
regex.test('Matematicas') // true
regex.test('   ') // false


// Metodos de arrays
let list = [];

// push: Se utiliza para insertar un elemento en la ultima posicion del array.
list.push(1); // [1]

// unshift: Caso contrario al push, inserta un elemento pero esta vez en la primera posición.
list.unshift(0); // [0, 1]

// splice: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// En este caso lo utilizaremos para eliminar un item en x posicion.
// Recibe como primer parametro el indice del elemento a eliminar, y como segundo parametro un 1
// que significa el número de elementos que deseas eliminar a partir de ese índice (en este caso, solo uno)

list.splice(0, 1) // [1]

// Recorrer un array con for

// Se declara la variable "i" y se incicializa en 0, esta variable se usara como un contador para recorrer el array.
// La condicional "i < list.length" controla cuando el bucle debe detenerse.
// Despues de cada iteracion del buble, incrementamos el valor de "i" con i++.

for (let i = 0; i < list.length; i++) {   
    console.log(list[i])
}

    // Haciendo uso del contador "i", vamos recorriendo las posiciones del array.