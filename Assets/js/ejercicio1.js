var tipo;
function init(){
    alert("Ejercicio 1");
    var palabra = document.getElementById("palabra").value;
    var longitud = document.getElementById('longitud');
    var mayusculas = document.getElementById('mayusculas');
    var minusculas = document.getElementById('minusculas');
    var primercaracter = document.getElementById('primercaracter');

    longitud.onclick = function(){
        long();
    }

    mayusculas.onclick = function(e){
        mayus();
    }

    minusculas.onclick = function (e){
        minus();
    }

    primercaracter.onclick = function(e){
        pcaracter();
    }
 
}

function long(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+ palabra+" y tiene una longitud de " +palabra.length);
}
function mayus(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+palabra+" y en mayúsculas es asi: "+(palabra.toUpperCase()));
}

function minus(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+palabra+" y en minúsculas es asi: "+(palabra.toLowerCase()));
}

function pcaracter(){
    palabra = document.getElementById("palabra").value;
    alert("La palabra es: "+palabra+" y su primer caracter es : "+palabra[0]);
}

