let num = parseInt(prompt("Ingrese un numero"))


    if (!isNaN(num)) { 
        if (num % 2 === 0) {
            console.log("El número " + num + " es par");
        } 
        else {
            console.log("El número " + num + " es impar ");
        }
    } 
    else {
        console.log("Por favor ingrese un número válido.");
    }