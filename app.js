// # Calcolo del prezzo del biglietto del treno


// - chiedere all'utente quanti km dovrà percorrere
//     - creare una variabile (kmUser) con i km percorsi dall'utente
let userKm
//     - chiedere i km all'utente attraverso un prompt
//     - assegnare alla variabile (kmUser) il valore restituito dal prompt
userKm = prompt('Inserire i km del tragitto')
userKm = parseInt(userKm)
console.log(userKm)

// - chiedere all'utente l'età
//     - creare una variabile (ageUSer) con l'età dell'utente
let userAge
//     - chiedere all'utente l'età attraverso un prompt
//     - assegnare alla variabile (ageUser) il valore restituito dal prompt
userAge = prompt('Inserire l\'età')
userAge = parseInt(userAge)
console.log(userAge)

// - definire il prezzo
//     - creare una variabile che definisca il prezzo base
let price = 0.21
//     - creare una variabile che definisca il prezzo del biglietto in base ai km dell'utente 
let userPrice = price * userKm
console.log(userPrice)

// - definire gli sconti
//     - creare una o più variabili che definiscano gli sconti
//         - creare una variabile per lo sconto di 20% (Junior)
let discountJunior = userPrice * 20 / 100
console.log(discountJunior)
//         - creare una variabile per lo sconto di 40% (Senior)
let discountSenior = userPrice * 40 / 100
console.log(discountSenior)


// - calcolare lo sconto

if (userAge < 18){   
    //     - SE l'età dell'utente è < 18 anni, applicare lo sconto Junior
    userPrice = (userPrice - discountJunior).toFixed(2)
} else if (userAge > 65) {  
     //     - ALTRIMENTI SE l'età dell'utente è > 65 anni,applicare lo sconto Senior 
    userPrice = (userPrice - discountSenior).toFixed(2)
}
//     - ALTRIMENTI non applicare nessuno sconto

console.log(userPrice)
      
// - emettere il prezzo finale
const messageDomElement = document.getElementById('message')
messageDomElement.innerHTML = userPrice