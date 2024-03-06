//TIPO DE DATO COMPLEJO------PASO POR REFERENCIA----------

// La variable adquiere la direccion en memoria en donde se encuentra el tipo complejo. 
// El memoria el/los valores son escritos y cualquier identificador puede apuntar hacia el. 
// Por lo tanto si el tipo complejo se modifica, 
// entonces todos loa identificadores que apuntan hacia el lo perciben

let frutas = {
    naranja: '🍊'
}
let vegetales = frutas

vegetales.naranja = '🌴'

console.log(frutas)


let ropa = {
    blusa: '👕'
}

ropa.pantalon = '👖'
console.log(ropa)