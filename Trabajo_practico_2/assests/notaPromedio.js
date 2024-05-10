let not1 = parseInt(prompt("Ingrese la primera nota"))
let not2 = parseInt(prompt("Ingrese la segunda nota"))
let not3 = parseInt(prompt("Ingrese la tercera nota"))
console.log(not1, not2, not3)

if(not1 < 1 || not1 >10 && not2 < 1 || not2 > 10 && not3 > 1 || not3 >10){
    console.log("Ingrese una nota valida")
}else if (isNaN(not1) || isNaN(not2) || isNaN(not3)){
console.log("Ingrese un numero")
} 
else{
    let promedio = (not1 + not2 + not3)/ 3;

    switch(true){
    case (promedio  >= 1  && promedio  <= 3):
    console.log("Nota insuficiente");
    break;
    case(promedio>=4 && promedio<5):
    console.log("nota regular")
    break;
    case(promedio>=6 && promedio<7):
    console.log("nota buena")
    break;
    case(promedio>=8 && promedio<=9):
    console.log("nota muy buena")
    break;
    case(promedio>=10 && promedio<=10):
    console.log("Nota sobresaliente")
} 
}
