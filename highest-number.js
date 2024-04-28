/**
 * HIGHEST NUMBER
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 */

alert("Ingresa 10 números y al final obtendrás el número mayor.")
let numeroMaximo = Number (prompt("Ingresa el primer número:"))
for (let i = 1; i < 10; i++) {
    let number = Number(prompt("Ingresa el siguiente número:"));
    if (number > numeroMaximo) {
    }
}

console.log("El número más grande de todos los que ingresaste es: " + numeroMaximo);

document.write("El número más grande que iniciaste es: " + numeroMaximo);