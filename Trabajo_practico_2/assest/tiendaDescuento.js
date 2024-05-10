let cantidadProc= parseInt(prompt("ingrese la cantidad de produto"))
let precioSolo= parseInt(prompt("Ingrese el precio del produto"))
let total = cantidadProc * precioSolo;
let descuento= total-(0.15 * total) ;
if (cantidadProc !=Number || precioSolo !=Number ){
    console.log("No una cantidad o precio para realizar el proceso de compra")
}
else if(cantidadProc >= 10 && total >= 20000){
    console.log("El total a pagar es: " + descuento)
} 	
else{
    console.log("el precio total es: " + total)
}