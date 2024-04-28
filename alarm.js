/**
 * ALARM
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */

alert ("Esta es una alarma rápida.")
let seconds = Number (prompt("¿En cuantos segundos quieres que suene tu alarma?"));
console.log ("Tu alarma está configurada para sonar en " + seconds + " segundos.") 

setTimeout(function() {
    console.log ("¡ES TIEMPO después de " + seconds + "segundos!"); 
} , seconds * 1000);
