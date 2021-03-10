let animado = document.querySelectorAll('.fixed_navbar');


function detectScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i<animado.length; i++ ){
        let alturaAminado = animado[i].offsetTop;
        if(alturaAminado +300 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].style.zIndex = 100;
            animado[i].classList.add("mostrarArriba");
            animado[i].classList.remove("mostrarAbajo");
        }
        if(alturaAminado +300 > scrollTop){
           
            animado[i].classList.remove("mostrarArriba");
            animado[i].classList.add("mostrarAbajo");
            
            
        }
        
    }
}

window.addEventListener('scroll',detectScroll);