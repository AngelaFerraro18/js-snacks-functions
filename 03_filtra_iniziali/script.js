/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function namesInitA (list1){
    let namesStartA = [];
    for ( let i = 0; i < names.length; i++){
        let namesItem = names[i];
        if (namesItem.at(0) === 'A'){
            namesStartA.push(namesItem);
        }
    
    } return namesStartA;
}

/* soluzione arrow function
const namesInitA = list1 =>{
    let namesStartA = [];
    for ( let i = 0; i < names.length; i++){
        let namesItem = names[i];
        if (namesItem.at(0) === 'A'){
            namesStartA.push(namesItem);
        }
    
    } return namesStartA;
}
*/
 
// Invoca la funzione qui e stampa il risultato in console

console.log(namesInitA(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

