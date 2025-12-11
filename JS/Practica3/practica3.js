
let otroNumero = 's';

while (otroNumero.toLowerCase() === 's') {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    alert(`Número aleatorio generado: ${numeroAleatorio}`);
    otroNumero = prompt("¿Otro? (s/n)");
}