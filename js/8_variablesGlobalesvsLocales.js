var theSum = 0;

addNumber();
function addNumber(){
    theSum = 2 + 2;
}
console.log(theSum);

function asignarEdad(){
    var Edad = 5 + 3;
    return Edad;
}
console.log(asignarEdad());

var nota = 5;
switch(nota) {
    case 5:
        console.log("Excelente");
        break;
    case 4:
    case 3:
        console.log("Bien");
        break;
    case 2:
    case 1:
        console.log("Mal");
        break;
    default: 
        console.log("Ingrese una calificación válida")
}

var ciudad = "Pitalito";
switch (ciudad) {
    case "Bogota":
        console.log("2600 m.s.n.m");
        break;
    case "Cali":
        console.log("1018 m.s.n.m");
        break;
    case "Neiva":
        console.log("442 m.s.n.m");
        break;
    case "Pitalito":
        console.log("1318 m.s.n.m");
        break;
    default:
        console.log("Ingrese una ciudad váñida!");
}

console.log("===Do While===");
var num2 = 5;
do {
    console.log(num2);
    num2++;
} while(num2 < 3);