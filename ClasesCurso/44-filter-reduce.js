// Iteraciones
// map(): Permite aplicar una funcion a cada elemente de un aray y construir un nuevo array con los resultados.
// forEach(): Itera sbre cada elemento de un array y ejecuta una funcion proporcionada para cada elemento, sin crear un nuevo array.
// filter(): Crea un nuevo array con elementos que cumplen una condicion dada por una funcion.
// reduce():  ejecuta una funcion sobre cada elemento de un array, devolviendo como resultado un unico valor.

// filter ()

const
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers)

const evenNumbers = numbers.filter(numbers => numbers % 2 === 0)
console.log(evenNumbers)

//reduce()

//caso1
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers2)

const sumNumbers = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumNumbers)

// Método Reduce() para contar palabras repetidas
// El método reduce() también puede ser utilizado para contar la frecuencia de palabras en un array. Aquí tienes un ejemplo:


let palabras = ["manzana", "banana", "manzana", "banana", "naranja", "manzana"];

let conteo = palabras.reduce((acumulador, palabra) => {
    if (palabra in acumulador) {
        acumulador[palabra]++;
    } else {
        acumulador[palabra] = 1;
    }
    return acumulador;
}, {});

console.log(conteo); // Imprime: { manzana: 3, banana: 2, naranja: 1 }

// En este ejemplo, la función que pasamos a reduce() toma dos argumentos: el "acumulador" (que es el objeto donde almacenamos el conteo de palabras) y la "palabra" (que es el elemento actual del array).
// Si la palabra ya existe como una propiedad en el acumulador, incrementamos su valor. Si no, la agregamos al acumulador con un valor inicial de 1.
// Al final, el acumulador contiene el conteo de todas las palabras en el array, y lo almacenamos en la variable conteo. Por lo tanto, conteo es un objeto que contiene el conteo de todas las palabras en el array.


//PROMEDIO DE NOTAS APROBATORIAS

const notas = [100, 60, 80, 80, 69, 100]
const NotasAprobatorias = notas.filter(notas => notas>=70) //ACA FILTRO LAS NOTAS APROBATORIAS 
const SumaNotasAprobatorias = NotasAprobatorias.reduce((acumulador, notas) => acumulador+notas) //ACA SUMO LAS NOTAS APROBATORIAS
const PromedioNotasAprobatorias = SumaNotasAprobatorias/NotasAprobatorias.length //SACO EL PROMEDIO DIVIDIENDO ENTRE LA CANTIDAD
//DE NOTAS EN EL ARRAY NotasAprobatorias

console.log(PromedioNotasAprobatorias) 

