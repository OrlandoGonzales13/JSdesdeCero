// let persona = {
//     nombre : "Orlando",
//     apellido: "Gonzales",
//     edad: 35
// }

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
}

const persona1 = new Persona("Orlando", "Gonzales",  28);

console.log(persona1)

persona1.nacionalidad = "Mexicano";
console.log(persona1)

const persona2 = new Persona("Felipe", "Garcia", 28)
console.log(persona2)

//El .prototype es una propiedad en JavaScript que está asociada con las funciones y los objetos. 
//Es un mecanismo fundamental en JavaScript que permite la creación de objetos complejos y la herencia entre objetos.
//En el contexto de una función constructora, .prototype es un objeto que se utiliza para añadir propiedades y 
//métodos que serán compartidos entre todas las instancias de los objetos creados por esa función constructora.
Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

persona1.saludar()
persona2.saludar()