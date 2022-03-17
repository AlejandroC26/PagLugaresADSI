class Vuelos {
    constructor(horaSalida, horaLlegada, destino){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
    }
}
var numberFormat = new Intl.NumberFormat('co-CO');

let horaSalida1 = new Date(2022, 03, 18, 10, 15, 0);
let horaLlegada1 = new Date(2022, 03, 18, 11, 25, 0);
/* ====================================================== */
let horaSalida2 = new Date(2022, 03, 25, 8, 20, 0);
let horaLlegada2 = new Date(2022, 03, 25, 11, 40, 0);

let vuelos = [
    {
        horaSalida : horaSalida1,
        horaLlegada : horaLlegada1,
        destino : "ADZ",
        precio : 1662000
    },
    {
        horaSalida : horaSalida2,
        horaLlegada : horaLlegada2,
        destino : "ADZ",
        precio : 562000
    }
];



let destinoTXT = '';
let horaSalidaTXT = '';
let horaLlegadaTXT = '';


function InsertarInfo(lugarDestino, horaSalida, horaLlegada, precio){
    let hSalida = horaSalida.getHours() + ":" + horaSalida.getMinutes();
    let hLlegada = horaLlegada.getHours() + ":" + horaLlegada.getMinutes();

    let priceTXT = 'cop'+numberFormat.format(precio);


    let duracionTiempo = 'asdasd';

    /* duracionTiempo = duracionTiempo.getHours() + "h " + duracionTiempo.getMinutes()+'Min'; */

    contenedor = document.getElementById('main-content');
    vueloDiv = document.createElement('div');
    vueloDiv.setAttribute('class', 'vuelo');

    masEconomicoDiv = document.createElement('div');
    masEconomicoDiv.setAttribute('class', 'mas-economico');

    masEconomicoSpan = document.createElement('span');
    masEconomicoSpan.appendChild(document.createTextNode('Más Económico'));
    masEconomicoDiv.appendChild(masEconomicoSpan);

    horaSalidaDiv = document.createElement('div');
    horaSalidaDiv.setAttribute('class', 'hora-salida');
    horaSalidaTXT = document.createTextNode(hSalida + 'a.m.');
    horaSalidaDiv.appendChild(horaSalidaTXT);

    duracionDiv = document.createElement('div');
    duracionDiv.setAttribute('class', 'duracion')
    duracionDiv.appendChild(document.createTextNode('Duración'));

    horaLlegadaDiv = document.createElement('div');
    horaLlegadaDiv.setAttribute('class', 'hora-llegada');
    horaLlegadaTXT = document.createTextNode(hLlegada + 'a.m.');
    horaLlegadaDiv.appendChild(horaLlegadaTXT);

    inicSalida = document.createElement('div');
    inicSalida.appendChild(document.createTextNode('DOG'));
    inicSalida.setAttribute('class', 'izquierda');

    tiempoLlegada = document.createElement('div');
    tiempoLlegada.appendChild(document.createTextNode(duracionTiempo));
    tiempoLlegada.setAttribute('class', 'tiempo');

    inicLlegada = document.createElement('div');
    inicLlegada.appendChild(document.createTextNode('CTG'));
    inicLlegada.setAttribute('class', 'derecha');

    directoDiv = document.createElement('div');
    directoDiv.appendChild(document.createTextNode('Directo'));
    directoDiv.setAttribute('class', 'directo');

    precioTotalDiv = document.createElement('div');
    precioTotalDiv.setAttribute('class', 'desde');
    adultosDesdeDiv = document.createElement('div');
    adultosDesdeDiv.setAttribute('class', 'adultos-desde');
    adultosDesdeDiv.appendChild(document.createTextNode('Adultos desde'));

    precioDiv = document.createElement('div');
    precioDiv.appendChild(document.createTextNode(priceTXT));
    precioDiv.setAttribute('class', 'price');

    precioTotalDiv.appendChild(adultosDesdeDiv);
    precioTotalDiv.appendChild(precioDiv);
    
    vueloDiv.appendChild(masEconomicoDiv);

    vueloDiv.appendChild(horaSalidaDiv);
    vueloDiv.appendChild(duracionDiv);
    vueloDiv.appendChild(horaLlegadaDiv);

    vueloDiv.appendChild(inicSalida);
    vueloDiv.appendChild(tiempoLlegada);
    vueloDiv.appendChild(inicLlegada);

    vueloDiv.appendChild(directoDiv);
    vueloDiv.appendChild(precioTotalDiv);

    contenedor.appendChild(vueloDiv);
    
    /* 

    div = document.createElement('div');
    destino = document.createElement('div');
    horaSalida = document.createElement('div');
    horaLlegada = document.createElement('div');

    destinoTXT = document.createTextNode(lugarDestino);
    horaSalidaTXT = document.createTextNode(hSalida);
    horaLlegadaTXT = document.createTextNode(hLlegada);

    destino.appendChild(destinoTXT);
    horaSalida.appendChild(horaSalidaTXT);
    horaLlegada.appendChild(horaLlegadaTXT);

    div.appendChild(destino);
    div.appendChild(horaSalida);
    div.appendChild(horaLlegada);
    contenedor.appendChild(div); */
}

vuelos.forEach(vuelo => {
    InsertarInfo(vuelo.destino, vuelo.horaSalida, vuelo.horaLlegada, vuelo.precio)
});









