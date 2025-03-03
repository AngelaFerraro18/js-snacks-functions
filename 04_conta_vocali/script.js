/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let count = 0;
const vocals = ['a', 'e', 'i', 'o', 'u'];

function countVocals(wordInput) {
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vocals.length; j++) {
            if (word[i] === vocals[j]) {
                count++;
            }
        }
    } return count;
}

/* soluzione arrow function

const countVocals = wordInput =>{
      for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < vocals.length; j++) {
                if (word[i] === vocals[j]) {
                    count++;
                }
            }
        } return count;
     }
    */

// Invoca la funzione qui e stampa il risultato in console

console.log(countVocals(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
