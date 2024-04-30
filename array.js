/* Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
*/

/**
 * QUÉ HACER:
 * 1- Tener un array a ordenar.
 * 2-Para desenvolver ese array y volverlo unidimensional, yo 
 * 3-Escribo nueva variable `flatten = array.flat();
 * 4- Hacer console.log de flatten.
 * 5-Para desenvolver más veces el array, colocar el numero de veces dentro del parentesis en `flatten = array.flat ();`
 */

let array = [1, [2, 3, [4, 5, [6]]]]
let flatten = array.flat(3);
console.log(flatten); 
console.log(array)



