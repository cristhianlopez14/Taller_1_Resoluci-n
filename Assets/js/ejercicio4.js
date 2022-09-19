var probar = document.getElementById('probar');

probar.onclick = function(e){
    comprobar();
}

function comprobar(){
    var nombre= document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var competencia= document.getElementById('competencia').value;

    if (nombre=='Tatiana' && apellido=='Cabrera' && competencia =='Calidad' || nombre=='Tatiana' && apellido=='Cabrera' && competencia =='JavaScript' ) {
        alert("Respuesta Correcta");
    }else if (nombre=='Carolina' && apellido=='Forero' && competencia =='Seguimiendo') {
        alert("Respuesta Correcta");
    }else if (nombre=='Adriana' && apellido=='Duarte' && competencia =='Diseño') {
        alert("Respuesta Correcta");
    }else if (nombre=='Yaneth' && apellido=='Castillo' && competencia =='Gestion') {
        alert("Respuesta Correcta");
    }else if (nombre=='Jonathan' && apellido=='Espitia' && competencia =='Php') {
        alert("Respuesta Correcta");
    }else if (nombre=='Luis' && apellido=='Baquero' && competencia =='Cultura') {
        alert("Respuesta Correcta");
    }else if (nombre=='Fernando' && apellido=='Galindo' && competencia =='Bases') {
        alert("Respuesta Correcta");
    }else{
        alert("Respuesta Incorrecta")
    }
}