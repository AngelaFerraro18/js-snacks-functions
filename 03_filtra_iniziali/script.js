/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function namesInitA (list1, string){
    let namesStartA = [];
    for ( let i = 0; i < list1.length; i++){
        let namesItem = list1[i];
        if (namesItem.at(0) === string){
            namesStartA.push(namesItem);
        }
    
    } return namesStartA;
}

/* soluzione arrow function
const namesInitA = list1 =>{
    let namesStartA = [];
    for ( let i = 0; i < list1.length; i++){
        let namesItem = list1[i];
        if (namesItem.at(0) === string){
            namesStartA.push(namesItem);
        }
    
    } return namesStartA;
}
*/
 
// Invoca la funzione qui e stampa il risultato in console
let letter = 'A';
console.log(namesInitA(names, letter));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

