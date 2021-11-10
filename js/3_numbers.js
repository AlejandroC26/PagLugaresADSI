"use strict";
var costo  = 3000;
var imnpuesto = 3500;
console.log("Subtotal: $"+(costo+imnpuesto));
console.log("El costo del domicilio es $2.000");
console.log("Con Domicilio: $"+ (costo+imnpuesto+2000));
/* Hallando el limite con la constante Number.MAX_SAFE_INTEGER */
console.log(Number.MAX_SAFE_INTEGER);
/* Hallando el limite con una operacion de potenciacion */
console.log(Math.pow(2,53) - 1);
/* Hallando el limite con la conversión de un binario a decimal */
let binario = "11111111111111111111111111111111111111111111111111111";
let binarioEnDecimal = parseInt(binario, 2);
console.log(binarioEnDecimal);
console.log(Number.MIN_SAFE_INTEGER);

var tryConvertToNumber = parseInt('Hola Mundo');
console.log(tryConvertToNumber);