// como crear un array?

        //1. new Array() or Array()

        const fruits = Array(`manzana`, `banana`, `orange`)
        console.log(fruits)

        const justOneNumber = Array(12)
        console.log(justOneNumber)

        const numbers = Array(1,2,3,4,5)
        console.log(numbers)

        //2.Arrray literal syntax

        const oneNumber = [4]
        console.log(oneNumber)

        const emptyArray = []
        console.log(emptyArray)

        const sport = [`soccer`, `tennis`, `rugby`]
        console.log(sport)

        const recipeIngredients = [
            `Flour`,
            2,
            true,
            {ingredient: `Milk`, quantity: `1 cup`},
            false
        ]
        console.log(recipeIngredients)


//Acceso a elementos del array

        const firstFruits = fruits[0]
        console.log(firstFruits)

//PROPRIEDAD length

const numberOfFruits = fruits.length
console.log(numberOfFruits)

//Mutability

fruits.push(`sandia`)
console.log(fruits)

//Inmutability 

const newFruits = fruits.concat([`kiwi`, `palta`])
console.log(fruits)
console.log(newFruits)

//Checking arrays whit Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

//EJERCICIO DE PRACTICA: SUMA DE TODOS LOS ELEMENTOS DE UN ARRAY

const numbersArray = [1,2,3,4,5]
let sum = 0;

for(i=0; i<numbersArray.length; i++){
    sum += numbersArray[i]
}

console.log(sum)