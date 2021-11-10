// Cambiar contenido de la variable a primera mayúscula y el resto minuscula
var municipio = "pITalITo";
municipio = municipio.toLowerCase();
municipio = municipio[0].toUpperCase() + municipio.slice(1);
console.log(municipio);

var SegundoNombre = 'Valle de Laboyos - Pitalito';
SegundoNombre = SegundoNombre.slice(9);
SegundoNombre = SegundoNombre.slice(0, 8);
console.log(SegundoNombre);