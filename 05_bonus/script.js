/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nameUser = 'Mario';

// Dichiara la funzione qui.

function helloUser(userName) {
    const today = new Date();
    let hours = today.getHours();
    let saluto;

    if (hours < 13) {
        saluto = `Buongiorno ${nameUser}`;
    } else if (hours < 17) {
        saluto = `Buon pomeriggio ${nameUser}`;
    } else {
        saluto = `Buonasera ${nameUser}`;
    }
    return saluto;
}

/* soluzione arrow function
const helloUser = userName =>{
    const today = new Date();
    let saluto;

    if (today < 13){
        saluto = `Buongiorno ${nameUser}`;
    } else if (today < 17){
        saluto = `Buon pomeriggio ${nameUser}`;
    } else {
        saluto = `Buonasera ${nameUser}`;
    }
    return saluto;
}
*/

// Invoca la funzione qui e stampa il risultato in console

console.log(helloUser(nameUser));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


