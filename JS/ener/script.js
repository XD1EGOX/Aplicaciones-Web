function encender() {
    var maquina = document.getElementById("maquina");
    var titulo = document.getElementById("titulo");
    var mensaje = document.getElementById("mensaje");

    maquina.style.backgroundColor = "green";
    titulo.innerHTML = "Máquina encendida";
    mensaje.innerHTML = "La máquina está funcionando";
}

function apagar() {
    var maquina = document.getElementById("maquina");
    var titulo = document.getElementById("titulo");
    var mensaje = document.getElementById("mensaje");

    maquina.style.backgroundColor = "red";
    titulo.innerHTML = "Máquina apagada";
    mensaje.innerHTML = "La máquina está detenida";
}

function crearMensaje() {
    var maquina = document.getElementById("maquina");

    var nuevo = document.createElement("p");
    nuevo.innerHTML = "Mensaje extra";

    maquina.appendChild(nuevo);
}

function borrarMensaje() {
    var maquina = document.getElementById("maquina");
    var parrafos = maquina.getElementsByTagName("p");

    if (parrafos.length > 1) {
        maquina.removeChild(parrafos[parrafos.length - 1]);
    }
}