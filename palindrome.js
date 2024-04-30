/**
 * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 */

function esPalindromo(cadena){
    let array = cadena.split("");
    let reverse = array.reverse();

    return cadena == reverse.join("") ? "Es palindromo" : "No es palindromo";
}

console.log(esPalindromo("raton"))