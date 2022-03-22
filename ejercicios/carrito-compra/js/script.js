let nombreAntiguo = 'Daniela';
let nuevoNombre = 'Francisco';
let productPrice = 112350;
let subtotal = 0;
var numberFormat = new Intl.NumberFormat('es-ES');
function EstablecerNuevoNombre(){
    document.getElementById("Nombres").innerHTML = nuevoNombre;
}
function EstablecerNombreAntiguo(){
    let NombreInterfaz = document.getElementById("Nombres").innerHTML;
    if(NombreInterfaz == nombreAntiguo){
        alert('El nombre de la interfaz es el inicial')
    } else {
        document.getElementById("Nombres").innerHTML = nombreAntiguo;
    }
}
function sumNum(){
    let actualNum = parseInt(document.getElementById('cant-product').innerHTML);
    let newNum = actualNum + 1;
    subtotal = newNum * productPrice;
    if(newNum <= 10) {
        if(newNum >= 2) document.getElementById('countProduct').innerHTML = newNum + ' productos';
        else document.getElementById('countProduct').innerHTML = newNum + ' producto';
        document.getElementById('cant-product').innerHTML = newNum;
        document.getElementById('subtotal').innerHTML = numberFormat.format(subtotal);
    }
}
function restNum(){
    let actualNum = parseInt(document.getElementById('cant-product').innerHTML);
    let newNum = actualNum - 1;
    subtotal = newNum * productPrice;
    if(newNum >= 0) {
        document.getElementById('cant-product').innerHTML = newNum;
        if(newNum >= 2) document.getElementById('countProduct').innerHTML = newNum + ' productos';
        else document.getElementById('countProduct').innerHTML = newNum + ' producto';
        document.getElementById('subtotal').innerHTML = numberFormat.format(subtotal);
    } 
}
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.getElementById('price').innerHTML =  numberFormat.format(productPrice);
    }
};