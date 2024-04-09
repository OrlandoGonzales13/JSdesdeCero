// slice ()
//El método slice() en JavaScript se utiliza en arrays para devolver una porción (subconjunto) de ese array, sin modificar el array original.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

const copyAnimals = animals.slice(1,4)
const copyAnimals2 = animals.slice(2)
const copyAnimals3 = animals.slice(-2)

console.log(animals)
console.log(copyAnimals)
console.log(copyAnimals2)
console.log(copyAnimals3)

console.log(animals.slice(2,-1))
