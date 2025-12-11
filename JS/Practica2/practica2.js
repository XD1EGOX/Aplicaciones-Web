
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
const operacion = prompt("¿Qué operación quieres hacer? (+, -, *, /):");

let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
    alert(`El resultado de ${numero1} + ${numero2} es ${resultado}`);
} else if (operacion === "-") {
    resultado = numero1 - numero2;
    alert(`El resultado de ${numero1} - ${numero2} es ${resultado}`);
} else if (operacion === "*") {
    resultado = numero1 * numero2;
    alert(`El resultado de ${numero1} * ${numero2} es ${resultado}`);
} else if (operacion === "/") {
    if (numero2 === 0) {
        alert("Error: No se puede dividir entre 0.");
    } else {
        resultado = numero1 / numero2;
        alert(`El resultado de ${numero1} / ${numero2} es ${resultado}`);
    }
} else {
    alert("Operación no válida. Por favor, elige entre +, -, * o /.");
}