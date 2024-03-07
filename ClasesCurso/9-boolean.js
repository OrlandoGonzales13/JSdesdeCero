//Buena práctica, es agregar al inicio del variable de tipo boolean unas palabras claves que permiten identificar su tipo, como si fuera una pregunta.
//1. is (es)
const isActive = true

//2. has (tener)
const hasPermisson = false

//Se puede tener una conversión implícita o explícita a booleano.
//Conversión Implícita (Lo hace javaScript)
const result = 5 > 3
console.log(result)

const name = 'Platzi'
console.log(!!name) //Para comprobar si tiene un valor anteponer !!


//Conversión Explícita
const value = 0 //esto es un numero (solo el 0 es falso)
const explicitBoolean = Boolean(value) //se paso a booleano
console.log(explicitBoolean)

const otherValue = 24 //(todo el resto de numero es verdadero)
const explicitOtherBoolean = Boolean(otherValue) //se paso a booleano
console.log(explicitOtherBoolean)