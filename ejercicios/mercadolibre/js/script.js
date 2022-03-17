var mainContent = document.getElementById('main-content');
var numberFormat = new Intl.NumberFormat('co-CO');
var search = document.getElementById('search');
function Computador(procesador, ram, grafica, disco, precio, cuotas, precioCuota, envioGratis, imagen){
    this.procesador = procesador;
    this.ram = ram;
    this.grafica = grafica;
    this.disco = disco;
    this.precio = precio;
    this.cuotas = cuotas;
    this.precioCuota = precioCuota;
    this.envio = envioGratis;
    this.imagen = imagen;
}
let equipo1 = new Computador('Amd Ryzen 3 3200g', '8gb Ram', 'Targeta Video R5 340 2gb', 'SSD 1tb', 2919900, 36, 8108, true, 'AmdRyzen3200g.jpg');
let equipo2 = new Computador('Amd Athlon 3000g', '16gb Ram', 'Gráficos Integrados Radeon Vega 3', 'SSD 240Gb', 1540000, 48, 5140, false, 'AmdAthlon.jpg');
let equipo3 = new Computador('Amd Ryzen 5 5600g', '16 Ram', 'Gráficos Integrados Vega 11', 'SSD 240', 2530000, 36, 7830, true, 'AmdRyzen5.jpg');
let equipo4 = new Computador('Intel Core ¡5 3470 3.2GHZ', '8gb Ram', 'Targeta Video R7 250', 'SSD 500GB', 2919900, 36, 8108, true, 'IntelCoreI5.jpg');
let equipo5 = new Computador('Intel Core ¡5 10400', '8gb Ram', 'Gráficos Integrados Intel UHD', 'SSD 1tb', 2449900, 36, 7080, false, 'intelCoreI5104002.jpg');
let equipo6 = new Computador('Intel Core !5 10400', '8gb Ram', 'Gráficos Integrados Intel UHD 630', 'SSD 240GB', 2919900, 36, 7208, true, 'intelCoreI510400.jpg');




function mostrarInformacion(producto){
    let product = document.createElement('div');
    let productImgDiv = document.createElement('div');
    let productImg = document.createElement('img');
    let productInfo = document.createElement('div');
    let productName = document.createElement('div');
    let productPrice = document.createElement('div');
    let productCuotas = document.createElement('div');
    let producEnvio = document.createElement('div');
    let enSpan = document.createElement('span');
    let spanSubir = document.createElement('span');
    let spanEnvioGratis = document.createElement('span');

    product.setAttribute('class', 'product');
    productImgDiv.setAttribute('class', 'product-image');
    productInfo.setAttribute('class', 'product-info');
    productName.setAttribute('class', 'product-name');
    productPrice.setAttribute('class', 'product-price');
    productCuotas.setAttribute('class', 'product-cuotas');
    spanSubir.setAttribute('class', 'subir');
    producEnvio.setAttribute('class', 'product-envio');

    productNameTXT = document.createTextNode(producto.procesador + ' + ' + producto.ram + ' + ' + producto.grafica + ' + ' + producto.disco);
    productPriceTXT = document.createTextNode('$ ' + numberFormat.format(producto.precio));
    enSpanTXT = document.createTextNode('en'+ "\u00a0");
    spanSubirTXT = document.createTextNode('$ '+ numberFormat.format(producto.precioCuota))
    numCuotasTXT = document.createTextNode(producto.cuotas +"x" + "\u00a0")
    envioGratisTXT = document.createTextNode('Envío gratis.')

    productImg.setAttribute('src', 'img/'+ producto.imagen);


    productImgDiv.appendChild(productImg);
    product.appendChild(productImgDiv);
    product.appendChild(productInfo);

    productName.appendChild(productNameTXT);
    productInfo.appendChild(productName);

    productPrice.appendChild(productPriceTXT);
    productInfo.appendChild(productPrice);

    enSpan.appendChild(enSpanTXT);
    spanSubir.appendChild(spanSubirTXT)
    productCuotas.appendChild(enSpan);
    productCuotas.appendChild(numCuotasTXT)
    productCuotas.appendChild(spanSubir);
    productInfo.appendChild(productCuotas);

    if(producto.envio)
        spanEnvioGratis.appendChild(envioGratisTXT);
        producEnvio.appendChild(spanEnvioGratis);
        productInfo.appendChild(producEnvio);

    mainContent.appendChild(product);

}

function normalizeWord(cadena){
    cadena = cadena.toLowerCase();
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}
function cleanWindow(){
    mainContent.innerHTML = '';
}
function loadAll(){
    mostrarInformacion(equipo1)
    mostrarInformacion(equipo2)
    mostrarInformacion(equipo3)
    mostrarInformacion(equipo4)
    mostrarInformacion(equipo5)
    mostrarInformacion(equipo6)
}


search.addEventListener('keyup', (e) => {
    let busqueda = search.value.toLowerCase();
    if(e.key == 'Enter'){
        cleanWindow();
        if(!busqueda) return loadAll();
        if(busqueda == 'ryzen' || busqueda == 'amd'){
            mostrarInformacion(equipo1)
            mostrarInformacion(equipo2)
            mostrarInformacion(equipo3)
        }
        else if(busqueda == 'intel' || busqueda == 'core'){
            mostrarInformacion(equipo4)
            mostrarInformacion(equipo5)
            mostrarInformacion(equipo6)
        }
        else if(busqueda == '8gb ram' || busqueda == '8' || busqueda == '8 ram'){
            mostrarInformacion(equipo1)
            mostrarInformacion(equipo4)
            mostrarInformacion(equipo5)
            mostrarInformacion(equipo6)
        } 
        else if(busqueda == 'athlon'){
            mostrarInformacion(equipo2)
        }
        else {
            loadAll();
            this.alert('No se han encontrado coincidencias')
        }
    }
})
window.onload = function(){loadAll()}