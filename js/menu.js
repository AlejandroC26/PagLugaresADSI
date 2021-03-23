$(document).ready(main);
/*CUANDO EL DOCUMENTO ESTÉ LISTO EJECUTE LA FUNCIÓN MAIN */

var contador = 1 ;

/*se crea la función main*/
function main(){
    /*cuando se pulse menu ejecute algo */
    $('.open-close').click(function(){
        
        /*si contador esta por defecto en 1 el menu esta oculto y se anima*/
        if(contador == 1){
            $('nav').animate({
                left:'0'
            });
            contador = 0;
            /* cuando se ejecuta el contador vale 0 para que le de aparezca otra vez */
        } 
        /*Si contador no es 1 entonces regresa */
        else{
            contador = 1;
            $('nav').animate({
                left:'-100%'
            });
        }

    });
};