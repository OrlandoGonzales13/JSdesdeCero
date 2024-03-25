//Metodos que no modifica el array original

//map()

const numbers=[1,2,3,4,5]
console.log(numbers)

const squaredNumbers=numbers.map(num=>num*num)
console.log(squaredNumbers)

//forEach( )

const colors=['red','pink','blue']
console.log(colors)

const iteratedColors=colors.forEach(color=>console.log(color))
console.log(iteratedColors)

//Ejercicio Faghrenheit to Celsius conversion

const temperaturesInFahrenheit=[32,68,95,104,212]
const temperaturesInCelsius=temperaturesInFahrenheit.map(fahrenheit=>(5/9)*(fahrenheit-32))

console.log('Temperatures In Fahrenheit: ',temperaturesInFahrenheit)
console.log('Temperatures In Celsius: ',temperaturesInCelsius)


const newNumbers=[1,2,3,4,5]
let sum=0
newNumbers.forEach(number=>{sum+=number})
console.log('Array of Numbers: ',newNumbers)
console.log('Sum of Numbers: ',sum)

//ejericio suma los elementos de un array

array = [1,2,3,4,5,6,7,8,9,10]

console.log('Array of numbers: ',  array)

let sumArray = 0

array.forEach(number => {
    sumArray += number
})

console.log('Sum of Array: ',  sumArray)
