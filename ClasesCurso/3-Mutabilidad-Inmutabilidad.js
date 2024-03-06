// ***TIPO DE DATO PRIMITIVO - INMUTABLE***
    //Los datos primitivos son valores simples y se almacenan directamente en la variable. 
    //Cuando asignas un valor primitivo a una variable, la variable almacena el valor real. 
    //Los datos primitivos son inmutables, lo que significa que una vez que se asigna un valor a una variable, 
    //no puedes cambiar el valor real almacenado en esa variable. Cualquier operación que parezca modificar un valor primitivo, 
    //en realidad crea un nuevo valor.

let numero1 = 20;
let numero2 = numero1 //Se copia el valor del numero 1 a numero 2
numero1 = 15 //esto no afecta al valor de numero 1
console.log(numero2) //Muestra 20, no 15

// let numero = 23
// numero = numero + 10
// console.log(numero)

// let esVedadero = true
// esVedadero = false
// console.log(esVedadero)


// ***TIPO DE DATO COMPLEJO - MUTABLE***
    // Los datos complejos, como objetos y arreglos,
    // son estructuras más avanzadas que contienen referencias a ubicaciones en la memoria, 
    // no los valores reales directamente. 
    // Cuando asignas un objeto a una variable, 
    // la variable realmente almacena una referencia a la ubicación en la memoria donde se encuentra ese objeto.

let cajaDeAndy = {juguete: 'Woddy'}
let cajaDeBonnie = cajaDeAndy; //se copia la referencia a cajaDeAndy en cajaDeBonnie

cajaDeAndy.juguete = 'Buzz Lightyear' //Esto afecta tambiena  cajaDeBonnie por que apuntan al mismo objeto
console.log(cajaDeBonnie.juguete) //Mustra buzz, no woddy

// let usuario = { nombre:'Orlando', edad:15}
// usuario.edad = 20
// console.log(usuario);

// let frutas = ['manzana', 'pera']
// frutas[0] = 'fresa'
// console.log(frutas)

// function cambiarNombre(objeto){
//     objeto.nombre = 'Nuevo Nombre'
// }

// let persona = {nombre: 'Alonso'}

// cambiarNombre(persona)
// console.log(persona)