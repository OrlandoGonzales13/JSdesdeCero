// Resumen de la clase
// Se estudiaron los siguientes métodos

// .includes() → Retorna true si el argumento es un elemento del array, de lo contrario, false.
// .indexOf() → Retorna el índice de la primera aparición del argumento si este pertenece al array, de lo contrario retorna -1
// .lastIndexOf() → A diferencia de .indexOf(), retorna el índice de la última aparición del elemento, si pertenece al array

//INCLUDES WITH NUMBERS

const numbers = [1, 2, 3, 4, 2, 5]

const resul1 = numbers.includes(3)
console.log(resul1)

const resul2 = numbers.includes(8)
console.log(resul2)


//indexOf
const resu3 = numbers.indexOf(2)
console.log(resu3)

const resu4 = numbers.indexOf(5)
console.log(resu4)

const fruits = ['apple', 'cherry', 'grape', 'mango']

const index1 = fruits.indexOf('grape')
console.log(index1)

const index2 = fruits.indexOf('sdfl;kgjdsfg')
console.log(index2)

//lastIndexOf
//const numbers = [1,2,3,4,2,5]
const resu5 = numbers.lastIndexOf(2)
console.log(resu5)

const resu6 = numbers.lastIndexOf(5)
console.log(resu6)


// Ejercicio: Encontrando Índices de substring

const stringArray = ["apple", "banana", "orange", "grape", "banana", "kiwi"];

const target = "banana";

function findStringIndicesInArray(array, target) {
    const result = {
        includesTargetString: false,
        firstOccurrenceIndex: -1,
        lastOccurrenceIndex: -1,
    };
    array.forEach((element, index) => {
        if (element.includes(target)) {
            result.includesTargetString = true;
            result.firstOccurrenceIndex = array.indexOf(target);
            result.lastOccurrenceIndex = array.lastIndexOf(target);
        }
    });
    return result;
}

const result = findStringIndicesInArray(stringArray, target);
console.log(result);

