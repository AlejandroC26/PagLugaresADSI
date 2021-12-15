function saludo(){
    alert("Hola");
}
function cerrar(){
    document.getElementById("mover").style.display = 'none';
}
function random(){
    let x = getRandomArbitrary(1, 90);
    let y = getRandomArbitrary(1, 90);

    x = parseInt(x);
    y = parseInt(y);

    document.getElementById("mover").style.top = x+'%';
    document.getElementById("mover").style.left = y+'%';

    console.log(x)
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}