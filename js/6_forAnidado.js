// Mostrando los elementos de un arreglo a travez de un for
var aprendices = ["David", "Andrea", "Daniela", "Alejandro"];
for (let i = 0; i < aprendices.length; i++) {
    console.log("Aprendiz N. "+ (i + 1) + ": " + aprendices[i]);
}

// Cargar información a un arreglo a travez de for
var Producto1 = new Array();
var Producto2 = new Array();
var Producto3 = new Array();
var productos = new Array();
for (let i = 0; i <= 2; i++) {
    alert("Ingrese el Registro N. "+ (i + 1));
    if(i === 0) {
        for (let j = 0; j < 4; j++) {
            Producto1[j] = prompt("Producto N. "+ (i + 1) + "_" + (j + 1) + ":");
        }
        productos[i] = Producto1;
    }
    if(i === 1) {
        for (let j = 0; j < 4; j++) {
            Producto2[j] = prompt("Producto N. "+ (i + 1) + "_" + (j + 1) + ":");
        }
        productos[i] = Producto2;
    }
    if(i === 2) {
        for (let j = 0; j < 4; j++) {
            Producto3[j] = prompt("Producto N. "+ (i + 1) + "_" + (j + 1) + ":");
        }
        productos[i] = Producto3;
    }
}
for (let i = 0; i <= 2; i++) {
    alert((i+1) + '. Productos: ' + eval("Producto" + (i+1)));
}