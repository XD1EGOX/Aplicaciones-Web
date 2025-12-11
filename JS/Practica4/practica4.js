

const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";

const usuarioIngresado = prompt("Ingresa tu nombre de usuario:");
let contrasenaIngresada = prompt("Ingresa tu contraseña:");

if (usuarioIngresado === usuarioCorrecto) {
    let intentosRestantes = 3;

    while (contrasenaIngresada !== contrasenaCorrecta && intentosRestantes > 1) {
        intentosRestantes--;
        alert(`Contraseña incorrecta. Te quedan ${intentosRestantes} intentos.`);
        contrasenaIngresada = prompt("Ingresa tu contraseña nuevamente:");
    }

    if (contrasenaIngresada === contrasenaCorrecta) {
        alert("Acceso concedido.");
    } else {
        alert("El usuario queda bloqueado. contacte con el administrador del sitio.");
    }
} else {
    alert("Usuario incorrecto. Se ha equivocado.");
}