/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function sayHello(nameInput) {
    const helloUser = 'Ciao ';
    const result = helloUser + nameInput;
    return result;
}

/* versione arrow function

    const sayHello = nameInput => {
    const helloUser = 'Ciao ';
    const result = helloUser + nameInput;
    return result;
}*/


// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
