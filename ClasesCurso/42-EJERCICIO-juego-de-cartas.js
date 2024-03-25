// Exercise: Card Game Implementation
// Imagine you're building a simple card game. You have an array representing a deck of cards, and you
// want to perform the following operations:
// 1. Shuffle the Deck: Randomly rearrange the order of the cards in the deck.
// 2. Deal Cards: Deal a specific number of cards to players from the top of the deck. This exercise
// involves using the splice() method to shuffle the deck and deal cards.

// Ejercicio: Implementación de un Juego de Cartas
// Supongamos que estás construyendo un juego de cartas simple. Tienes un array que representa un
// mazo de cartas y deseas realizar las siguientes operaciones:
// 1. Barajar el Mazo: Reorganizar aleatoriamente el orden de las cartas en el mazo.
// 2. Repartir Cartas: Repartir una cantidad específica de cartas a los jugadores desde la parte
// superior del mazo. Este ejercicio implica el uso del método splice() para barajar el mazo y
// repartir las cartas.

const deck = ["1♠", "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠",
                            "1♥", "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥",
                            "1♦", "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦",
                            "1♣", "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣"];

console.log(deck)

//Algoritmo fisher-yates 
function shuffleDeck () {
    for(let i = deck.length - 1;  i>0; i-- ){
        // [0,1]
        const j = Math.floor(Math.random( ) * (i+1));
        [deck[i],deck[j]]=[deck[j],deck[i]]
    }
}

function dealCards(numCard){
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffleDeck()
const player1 = dealCards(8)
const player2 = dealCards(8)
const player3 = dealCards(8)
const player4 = dealCards(8)

console.log('Player 1 hand: ', player1 )
console.log('Player 2 hand: ', player2)
console.log('Player 3 hand: ', player3)
console.log('Player 4 hand: ', player4)