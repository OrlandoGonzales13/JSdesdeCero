//METODOS QUE MODIFICAN EL ARRAY ORIGINAL (MUTABILITY)

// splice()
// Elimina elementos y agrega nuevos elementos al array.

const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
console.log(vegetables)

const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')
console.log(vegetables)
console.log(removedVegetables)


// reverse()
// Invierte el orden de los elementos en un array.

const numbers = [1,2,3,4,5]
console.log(numbers)

const reverseNumbers = numbers.reverse()
console.log(reverseNumbers)


// sort()
// Ordena los elementos alfabéticamente (por defecto).
const desorden1 = [4, 18, 1, 62 , 34]
console.log(desorden1)

const orden = desorden1.sort()
console.log(orden)

//sort() whit numbers

const desorden2 = [4, 18, 1, 62 , 34]
console.log(desorden2)

const orden2 = desorden2.sort((a,b) => a - b )
console.log(orden2)

//sort() whit strings . UTF-16

const cities = ['Ney York', 'Paris', 'Tokyo', 'London']
console.log(cities)

const sortedCities = cities.sort()
console.log(sortedCities)


// fill()
// Rellena un array con un valor específico.

const ages = [21, 35 ,45, 50]
console.log(ages)

console.log(ages.fill('0', 2,3))
console.log(ages.fill('0', 2,4))
console.log(ages.fill(15,1))
console.log(ages.fill(15))