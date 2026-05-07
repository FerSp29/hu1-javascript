/**
 * Sistema Interactivo de Bienvenida
 * Descripción: Este sistema solicita los datos al usuario, los valida y luego muestra un mensaje personalizado.
 */

// 1. Entrada de datos del Usuario
// Usamos el 'const' para el nombre ya que no se planea reasignar su valor base
const nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Usamos 'let' para la edad ya que podríamos necesitar transformarla o reasignarla después de la validación
let edadIngresada = prompt("Por favor, ingresa tu edad:");

// 2. Validación de los edad
// Convertimos la entrada a un número y verificamos si es válida
const edadNumerica = Number(edadIngresada);

if (isNaN(edadNumerica) || edadIngresada ==="" || edadIngresada === null) {
    // Si la entrada no es un número mostramos un error en la consola
    console.error("Error: Por favor, ingresa una edad válida en números.");
    alert("Error: La edad ingresada no es válida.");
} else {
    // 3. Condicionales y mensajes dinámicos
    // Evaluamos si el usuario es mayor de edad o menor de edad
    if (edadNumerica <18) {
        // Mensaje para menores de 18 años
        const mensajeMenor = `¡Hola ${nombreUsuario}, Eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        console.log(mensajeMenor);
        alert(mensajeMenor);
    } else {
        // Mensaje para mayores o iguales a 18 años
        const mensajeMayor = `¡Hola ${nombreUsuario}, Eres mayor de edad. ¡Prepárate para las grandes oportunidades en el mundo de la programación!`;
        console.log(mensajeMayor);
        alert(mensajeMayor);
    }
}
