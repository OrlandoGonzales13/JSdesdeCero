//METODOS QUE MODIFICAN EL ARRAY ORIGINAL (MUTABILITY)

//push()

const paises = [`Argentina`, `Peru`, `USA`]
const nuevosPaises = paises.push(`Alemania`, `Australia`)

console.log(paises)
console.log(nuevosPaises)

//POP
const eliminarPais = paises.pop();
console.log(paises)
console.log(eliminarPais)