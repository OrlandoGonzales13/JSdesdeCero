/* 

this --- class

this --- objeto --- class

*/


class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona("Orlando", 28);
console.log(persona1)

persona1.nuevoMetodo = function(){
    console.log(`Mi nombre es ${this.nombre}`)
}

persona1.nuevoMetodo()
