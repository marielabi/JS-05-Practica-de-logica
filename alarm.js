/**
 * ALARM
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */

/**
 * 1-Despliego una alerta para avisar que es mi programa.
 * 2-Defino variable `seconds`, en la que con prompt el usuario indicará cuantos segundos quiere que tenga su alarma. Uso `number` porque lo que el user escriba será convertido a dato numerico.
 * 3-Una vez que los segundos se establecieron por user, consol.log desplegará cuando falta en consola.
 * 4-setTimeout es una funcion preestablecida de JS para ejecutar una función luego de un periodo de tiempo. Esa función alberga function() qye es una función anónima como argumento a setTimeout. Esta función se ejecutará cuando acabe el tiempo especificado.
 * 5- Dentro de la función anónima function(), albergamos un console.log("es tiempo.....) que imprimirá un mensaje en la consola.
 * 6- 
 */

alert ("Esta es una alarma rápida.")
let seconds = Number (prompt("¿En cuantos segundos quieres que suene tu alarma?"));
console.log ("Tu alarma está configurada para sonar en " + seconds + " segundos.");
alert ("Tu alarma está configurada para sonar en " + seconds + " segundos. ");

setTimeout(function() {
    console.log ("¡ES TIEMPO después de " + seconds + "segundos!"); 
    alert ("¡Es tiempo después de " + seconds + " segundos!");
} , seconds * 1000);

