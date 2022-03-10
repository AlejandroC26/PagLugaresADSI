var mainContent = document.getElementById('main-content');

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
let equipo1 = new Computador('Amd Ryzen 3 3200g', '8gb Ram', 'Targeta Video R5 340 2gb', 'Ssd 1tb', 2919900, 36, 8108, true, 'AmdRyzen3200g.jpg');



function mostrarInformacion(){
    let product = document.createElement('div');
    let productImgDiv = document.createElement('div');
    let productImg = document.createElement('img');
    let productInfo = document.createElement('div');
    let productName = document.createElement('div');
    let productPrice = document.createElement('div');
    let productCuotas = document.createElement('div');
    let producEnvio = document.createElement('div');

    product.setAttribute('class', 'product');
    productImgDiv.setAttribute('class', 'product-image');
    productInfo.setAttribute('class', 'product-info');
    productName.setAttribute('class', 'product-name');
    productNameTXT = document.createTextNode(equipo1.procesador + ' + ' + equipo1.ram + ' + ' + equipo1.grafica + ' + ' + equipo1.disco);
    productPriceTXT = document.createTextNode(equipo1.precio);

    productPrice.setAttribute('class', 'product-price');
    productImg.setAttribute('src', 'img/'+ equipo1.imagen);


    productImgDiv.appendChild(productImg);
    product.appendChild(productImgDiv);
    product.appendChild(productInfo);

    productName.appendChild(productNameTXT);
    productInfo.appendChild(productName);

    productPrice.appendChild(productPriceTXT);
    productInfo.appendChild(productPrice);


    mainContent.appendChild(product);

}
