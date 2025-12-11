

const nombre = prompt("¿Cuál es tu nombre?");
const anioNacimiento = parseInt(prompt("¿En qué año naciste?"), 10);

const anioActual = 2024;
const edad = anioActual - anioNacimiento;

alert(`Hola, ${nombre}! Tienes ${edad} años.`);
