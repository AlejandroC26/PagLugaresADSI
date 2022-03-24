function listenSearch(){
    document.getElementById('search').addEventListener('click', e => {
        showSearchDiv();
    })
}
function listenClose(){
    document.getElementById('close-btn').addEventListener('click', e => {
        showNormalDiv();
        listenSearch();
    })
}

function clearHeader (){
    let header = document.getElementById('header');
    header.innerHTML = ''
}
function showNormalDiv(){
    clearHeader();
    crearNormalNavbar();
}

function showSearchDiv (){
    clearHeader();
    createSearchNavbar();
    document.getElementById('search-input').focus();
    listenClose();
}

function createSearchNavbar(){
    let searchBox = document.createElement('div');
    let searchLogo = document.createElement('div');
    let searchInput = document.createElement('div');
    let closeBtn = document.createElement('div');

    let iconSearch = document.createElement('span');
    let inputSearch = document.createElement('input');
    let iconClose = document.createElement('span');

    searchBox.setAttribute('class', 'search');
    searchLogo.setAttribute('class', 'search-logo');
    searchInput.setAttribute('class', 'search-input');
    closeBtn.setAttribute('class', 'close-btn');
    closeBtn.setAttribute('id', 'close-btn');

    iconSearch.setAttribute('class', 'icon-search');
    inputSearch.setAttribute('type', 'text');
    inputSearch.setAttribute('id', 'search-input');
    inputSearch.setAttribute('placeholder', '¿Que estás buscando?');
    iconClose.setAttribute('class', 'icon-close1');

    searchLogo.appendChild(iconSearch);
    searchInput.appendChild(inputSearch);
    closeBtn.appendChild(iconClose);


    searchBox.appendChild(searchLogo);
    searchBox.appendChild(searchInput);
    searchBox.appendChild(closeBtn);
    header.appendChild(searchBox);
}

function crearNormalNavbar(){
    let header = document.getElementById('header');

    let navbar = document.createElement('div');
    let burguerDiv = document.createElement('div');
    let logoDiv = document.createElement('div');
    let searchDiv = document.createElement('div');
    let cartDiv = document.createElement('div');
    let userDiv = document.createElement('div');

    let burguerIcon = document.createElement('span');
    let logoImage = document.createElement('img');
    let searchIcon = document.createElement('span');
    let cartIcon = document.createElement('span');
    let cartCircle = document.createElement('span')
    let userIcon = document.createElement('span');

    navbar.setAttribute('class', 'navbar');
    burguerDiv.setAttribute('class', 'burguer');
    logoDiv.setAttribute('class', 'logo');
    searchDiv.setAttribute('class', 'search-box');
    searchDiv.setAttribute('id', 'search');
    cartDiv.setAttribute('class', 'cart');
    userDiv.setAttribute('class', 'user');

    burguerIcon.setAttribute('class', 'icon-menu1');
    logoImage.setAttribute('src', 'img/logo.png');
    searchIcon.setAttribute('class', 'icon-search');
    cartIcon.setAttribute('class', 'icon-add_shopping_cart');
    cartCircle.setAttribute('class', 'cart-articles');
    userIcon.setAttribute('class', 'icon-user-o');

    cartCircle.appendChild(document.createTextNode('0'));
    

    burguerDiv.appendChild(burguerIcon);    
    logoDiv.appendChild(logoImage);    
    searchDiv.appendChild(searchIcon);    
    cartDiv.appendChild(cartCircle);    
    cartDiv.appendChild(cartIcon);    
    userDiv.appendChild(userIcon);  
    
    navbar.appendChild(burguerDiv);
    navbar.appendChild(logoDiv);
    navbar.appendChild(searchDiv);
    navbar.appendChild(cartDiv);
    navbar.appendChild(userDiv);
    header.appendChild(navbar);
}

listenSearch();