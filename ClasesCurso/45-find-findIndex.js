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