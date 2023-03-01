let menuVisible = false;
// funcion menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    // ocultar menu luego de seleccionar
    document.getElementById("nav").classList="";
    menuVisible=false;
}

