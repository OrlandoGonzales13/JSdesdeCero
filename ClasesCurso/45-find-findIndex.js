// Funcionamiento y sintaxis de find() y findIndex()
// Find()

// RETORNA EL VALOR DEL PRIMER ELEMENTO de un array que cumpla con la condición
// Ejemplo & Sintaxis

const multiples = [5, 10, 15, 20]
const firstNumber = multiples.find(element => element > 10)

console.log(multiples) // [5, 10, 15, 20]
console.log(firstNumber) // 15

// findIndex()
// RETORNA EL INDICE (LA POSICION EN EL ARRAY) del primer elemento que cumpla con la condición
// Ejemplo & Sintaxis

const randomNumber = [6, 14, 27, 56, 40]
const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber) //  [6, 14, 27, 56, 40]
console.log(indexNumber) // 3


// Ganador del sorteo
// Programa de verificación
// En este programa podrás verificar si
// una persona está en la lista de
// ganadores en un sorteo. Simplemente ingrese
// el nombre o número de billete, y
// el programa comprobará y
// mostrar los ganadores

const winningParticipants=[
    {id:1,name:'Jennifer',ticketNumber:001},
    {id:8,name:'Michael',ticketNumber:008}
    ,{id:15,name:'Emily',ticketNumber:015},
    {id:47,name:'Charlie',ticketNumber:047}]

function findWinnerByName(name){
    const winner=winningParticipants.find(participants=>participants.name===name)
    return winner||'No winner found with that name.'
}

function findIndexWinnerByTicket(ticketNumber){
    const index=winningParticipants.findIndex(participants=>participants.ticketNumber===ticketNumber)
    return index!==-1?index:'No winner found with that ticket number.'
}

function displayWinnerInformation(winner){
    if(winner!==undefined&&winner!=null&&winner!=='No winner found with that name.'){
        console.log('Winner information: ',winner)
    }else{
        console.log('No winner found.')
    }
}

const winnerByName=findWinnerByName('Emily')
const indexWinnerByTicket=findIndexWinnerByTicket(015)

displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ',indexWinnerByTicket)