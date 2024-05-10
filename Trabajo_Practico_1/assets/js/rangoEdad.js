let edad = parseFloat(prompt("Ingrese una edad"))

if (edad >0 && edad <=12){
    console.log("Niño")
}
else if(edad >13 && edad<19){
    console.log("Adolescente")
}
else if(edad >20 && edad <59){
    console.log("Adulto")
}
else if(edad >60 && edad <=119 ){
    console.log("Adulto mayor")
}
else if (edad !=Number){
    console.log("No ingreso una edad")
}