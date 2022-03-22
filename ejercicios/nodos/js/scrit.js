function cargarDatos(){
    if(validarFormulario() == false) return alert('Completa todos los campos requeridos');
    if(!document.getElementById("body-table")) crearTabla();
    agregarColumna(validarFormulario());
    limpiar();
}
function validarFormulario(){
    var codigo = document.getElementById("codigo");
    var descripcion = document.getElementById("descripcion");
    var valorUnitario = document.getElementById("valorUnitario");
    var unidadesStock = document.getElementById("unidadesStock");
    let json = {
        codigo: codigo.value,
        descripcion: descripcion.value,
        valorUnitario: valorUnitario.value,
        unidadesStock: unidadesStock.value,
    }
    if(codigo.value.trim().length == 0 ) {
        codigo.focus();
        return false
    };
    if(descripcion.value.trim().length == 0) {
        descripcion.focus();
        return false;
    }
    if(valorUnitario.value.trim().length == 0) {
        valorUnitario.focus();
        return false;
    }
    if(unidadesStock.value.trim().length == 0) {
        unidadesStock.focus();
        return false;
    }
    return json;
}

function crearTabla () {
    var tableDiv = document.getElementById('tabla');
    var tabla = document.createElement("table");

    var tblHead = document.createElement("thead");
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "body-table")

    var hilera = document.createElement("tr");

    var celda1 = document.createElement("th");
    var celda2 = document.createElement("th");
    var celda3 = document.createElement("th");
    var celda4 = document.createElement("th");

    var texto1 = document.createTextNode("Código");
    var texto2 = document.createTextNode("Descripción");
    var texto3 = document.createTextNode("Valor Unitario");
    var texto4 = document.createTextNode("Unidades en Stock");

    celda1.appendChild(texto1);
    celda2.appendChild(texto2);
    celda3.appendChild(texto3);
    celda4.appendChild(texto4);

    hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
    
    tblHead.appendChild(hilera);
    tabla.appendChild(tblHead);
    tabla.appendChild(tblBody);
    tableDiv.appendChild(tabla);
    tabla.setAttribute("class", "table-style");
    tabla.setAttribute("id", "main-table");
}
function agregarColumna(data){
    var tblBody = document.getElementById("body-table");
    var hilera = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td"); 

    var codigoTXT = document.createTextNode(data.codigo);
    var descripcionTXT = document.createTextNode(data.descripcion);
    var valorUnitarioTXT = document.createTextNode(data.valorUnitario);
    var unidadesStockTXT = document.createTextNode(data.unidadesStock);

    celda1.appendChild(codigoTXT);
    celda2.appendChild(descripcionTXT);
    celda3.appendChild(valorUnitarioTXT);
    celda4.appendChild(unidadesStockTXT);

    hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
    tblBody.appendChild(hilera);
}
function limpiar(){
    document.getElementById("codigo").value = '';
    document.getElementById("descripcion").value = '';
    document.getElementById("valorUnitario").value = '';
    document.getElementById("unidadesStock").value = '';
}
