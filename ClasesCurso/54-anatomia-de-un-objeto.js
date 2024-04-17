/* 

Un objeto es una estructura de datos
key / value

objeto {
    propiedad : valor,
    propiedad : valor,
    propiedad : valor
}

*/

const persona = {
    nombre: "Orlando",
    edad: 30,
    direccion: {
        calle: "Av Insurgente 187",
        ciudad: "La Perla"
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona)
persona.saludar()


