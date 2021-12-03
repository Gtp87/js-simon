// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


let randNumContainer = document.querySelector('.numbers');
let numRandomArray = [];
let numUser = [];

// funzione numeri casuali

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// prendo 5 numeri casuali da 1 a 100

for (let index = 0; index < 5; index++) {
    let randNum = getRandomIntInclusive(1, 100);

    // verifico siano numeri unici
    while (numRandomArray.includes(randNum)) {
        randNum = getRandomIntInclusive(1, 100);
    }
    
    // inserisco numeri in array
    numRandomArray.push(randNum);
}

console.log(numRandomArray);

// stampo in pagina
randNumContainer.append(numRandomArray);

// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

//  timer per pulire html
let firstTimer = setTimeout(() => {
    randNumContainer.innerHTML = '';
    
    // timer per i prompt
    let secondTimer = setTimeout(() => {
       numUser = [];
    //    chiedo 5 volte di inserire un numero all'utente
       for (let index = 0; index < 5; index++) {
           let userSelection = parseInt(prompt('inserisci numero da 1 a 100'));
           while (numUser.includes(userSelection)){
            userSelection = parseInt(prompt('inserisci numero da 1 a 100'));
           }
           
        //    creo array numero utenti
           numUser.push(userSelection);
           console.log('numeri utente: ', numUser);
       } 


    }, 30000);

}, 3000);