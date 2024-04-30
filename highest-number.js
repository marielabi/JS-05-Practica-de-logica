/**
 * HIGHEST NUMBER
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 */


/** 
 * 1- `alert` hace que aparezca un mensajito en la pagina web
 * 2- asignamos nombre a variable `numeroMaximo` que será el primer numero ingresado por el usuario y le ponemos `number`: los datos que se ingresen serán convertidos a números. Adicionalmente ponemos una prompt para que se aparezca una ventana para ingresar el dato de la variable.
 * 3-Iniciamos un bucle for para obtener los siguientes 9 numeros ingresados por usuario.
 * 4- `i` significa indice, y se usa para representar el numero de iteraciones que van en un bucle. En la primera iteración `i` es igual a 1, pero en la segunda `i` será igual a 2, y asi sucesivamente hasta que `i` sea igual a 10.
 * 5- inicializamos con variable let i = 1; y seguimos con la condición de que mientras `i` sea menor que  10; se hará un incremento de iteración (representado con `i++`)
 * 6-Despues se añade una nueva variable, con prompt el usuario la ingresa. Tiene `number` porque será convertida esa entrada a numero.
 * 7- Con if decimos la condición `si el numero ingresado es mayor que numero máximo, sustituirá al numero máximo`
 * 8- De este modo, el ciclo de este bloque de codigo se repetira hasta que sean las 10 comparaciones.
 * 9- Al final, con `console.log` se imprime en consola la leyenda del numero mas grande es....
 * 10- Usamos document.write para escribir lo mismo pero que salga en la pagina como tal, no en la consola
 */
alert("Ingresa 10 números y al final obtendrás el número mayor.")
let numeroMaximo = Number (prompt("Ingresa el primer número:"))
for (let i = 1; i < 10; i++) {
    let number = Number(prompt("Ingresa el siguiente número:"));
    if (number > numeroMaximo) {
        numeroMaximo=number;
    }
}

console.log("El número más grande de todos los que ingresaste es: " + numeroMaximo);

document.write("El número más grande que ingresaste es: " + numeroMaximo);

