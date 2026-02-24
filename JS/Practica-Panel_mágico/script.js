function cambiarTexto() {
    var texto = document.getElementById("texto");
    texto.innerHTML = "El texto ha sido cambiado";
}

function cambiarColor() {
    var caja = document.getElementById("caja");
    caja.style.backgroundColor = "lightblue";
}

function crearParrafo() {
    var caja = document.getElementById("caja");

    var nuevo = document.createElement("p");
    nuevo.innerHTML = "Nuevo párrafo añadido";

    caja.appendChild(nuevo);
}

function borrarParrafo() {
    var caja = document.getElementById("caja");
    var parrafos = caja.getElementsByTagName("p");

    if (parrafos.length > 1) {
        caja.removeChild(parrafos[parrafos.length - 1]);
    }
}