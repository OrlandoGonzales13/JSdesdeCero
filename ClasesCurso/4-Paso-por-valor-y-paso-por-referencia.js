//PASO POR VALOR (TIPO DE DATO PRIMITIVOS)

let x = 1
let y = 'Hola'
let z = null

let a = x 
let b = y
let c = z

console.log(x,y,z,a,b,c)

a = 12 
b = 'Platzi'
c = undefined

//PASO POR REFERENCIA (TIPO DE DATO COMPLEJOS)

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['🥐']
let copiaDePanes = panes
panes.push('🍞')
console.log(panes, copiaDePanes)


//-------------------------------------------------------------

// 1. Paso por Valor:
// -En el paso por valor, se pasa una copia del valor de la variable como argumento a la función.
// -Esto significa que cualquier modificación realizada dentro de la función no afecta a la variable 
//  original fuera de la función.
// -Este enfoque es común en lenguajes que trabajan con tipos de datos primitivos (números, strings, booleanos, etc.).

function modificarValor(x) {
    x = x + 1;
    console.log(x); // Dentro de la función: x es modificado
}

let t = 5;
modificarValor(t);
console.log(t); // Fuera de la función: a no se ve afectada

// En este ejemplo, a no se ve afectada por la función modificarValor porque 
// se pasa una copia del valor de a, no la variable a en sí misma.


// 2. Paso por Referencia:
// En el paso por referencia, se pasa la referencia a la ubicación en memoria de la variable como argumento a la función. 
// Cualquier modificación realizada dentro de la función afecta directamente a la variable original fuera de la función. 
// Este enfoque es común en lenguajes que trabajan con objetos y estructuras de datos más complejas.

function modificarArray(arr) {
    arr.push(4);
    console.log(arr); // Dentro de la función: el array es modificado
}

let miArray = [1, 2, 3];
modificarArray(miArray);
console.log(miArray); // Fuera de la función: miArray se ve afectado

// En este ejemplo, miArray se ve afectado por la función modificarArray porque
//  se pasa una referencia al mismo array, no una copia de su contenido.