var rojo = document.getElementById("rojo")
var amarillo = document.getElementById("amarillo")
var verde = document.getElementById("verde")
var titulo = document.getElementById("titulo")

function ponerRojo(){
    titulo.innerHTML = "Semáforo en rojo"
    rojo.style.backgroundColor = "red"
    amarillo.style.backgroundColor = "grey"
    verde.style.backgroundColor = "grey"

}

function ponerAmarillo(){   
    titulo.innerHTML = "Semáforo en amarillo"
    amarillo.style.backgroundColor = "yellow"
    rojo.style.backgroundColor = "grey"
    verde.style.backgroundColor = "grey"
}

function ponerVerde(){
    titulo.innerHTML = "Semáforo en verde"
    verde.style.backgroundColor = "green"
    rojo.style.backgroundColor = "grey"
    amarillo.style.backgroundColor = "grey"
}

function apagar(){
    titulo.innerHTML = "Semáforo apagado"
    rojo.style.backgroundColor = "grey"
    amarillo.style.backgroundColor = "grey"
    verde.style.backgroundColor = "grey"

}