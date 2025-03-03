/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function namesInitials (list1){
    let namesFistLetter = [];
    for ( let i = 0; i < names.length; i++){
        let namesItem = names[i];
        namesFistLetter.push(namesItem.at(0));
    
    } return namesFistLetter;
}

/* soluzione arrow function
const namesInitials = list1 => {
    let namesFistLetter = [];
    for ( let i = 0; i < names.length; i++){
        let namesItem = names[i];
        namesFistLetter.push(namesItem.at(0));
    
    } return namesFistLetter;
}*/

// Invoca la funzione qui e stampa il risultato in console

console.log(namesInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


