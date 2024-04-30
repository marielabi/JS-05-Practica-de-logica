/**
 * USER PROFILE
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */


/**
 * 1- Designo variable para indicar el nombre de usuario
 * 2- `prompt`sirve para que los usuarios pongan algo por ellos mismos.
 * 3-Designo variable para la edad y coloco prompt para que el usuario asigne.
 * 4- Ocurre lo mismo con peliculas.
 * 5- `console.log` mostrará en consola la frase junto con las variables asignadas por el usuario. 
 * 6- `document.write` despliega cosas escritas en el html.
 */
let userName = (prompt ("Ingresa tu nombre de usuario:")); 
let age = Number (prompt ("Ingresa tu edad usando sólo números:"));
let favoriteMovies = (prompt ("Ingresa tus 3 películas favoritas:"));

console.log("Hola, soy " + userName + ",  tengo  " + age + " años de edad, y mis peliculas favoritas son " + favoriteMovies);

document.write("Hola, soy " + userName + ", tengo " + age + "años de edad, y mis peliculas favoritas son " + favoriteMovies);