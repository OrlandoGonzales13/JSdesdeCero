//every() TODOS

const array = [6,14,27,56,40]
const mayoresDeEdad = array.every(edad => edad > 18)
console.log(array)
console.log(mayoresDeEdad)

//some() ALGUNOS
const mayoresDeEdad2 = array.some(edad => edad > 18)
console.log(array)
console.log(mayoresDeEdad2)


// Resumen de la clase
// Ambos métodos vistos en esta clase no mutan el array original si no que retornan un booleano de la siguiente manera:

// .every() → Retorna true si todos los elementos del arreglo cumplen la función callback
// .some() → Retorna true si al menos un solo del arreglo cumplen la función callback