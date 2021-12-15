function validarInfo(numeroDocumento) {
    var texto = document.getElementById(numeroDocumento).value;
    if(texto === ""){
        alert("Digita algo eres imbecil o k?")
    }
}

function buscarCiudad(){
    var nombreCiudad;
    var codigoPostal = document.getElementById("codigo").value;
    switch(codigoPostal) {
        case "41551":
            nombreCiudad = "Pitalito";
            break;
        case "41001":
            nombreCiudad = "Neiva";
        case "41530":
            nombreCiudad = "Palestina";
    }
    document.getElementById("ciudad").value = nombreCiudad;
}