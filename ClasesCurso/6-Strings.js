//CREACIOÓN DE STRINGS

const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraOpcion = `Comillas simples`

//1-Concatenacion: +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es ' + direccion + " " + ciudad
console.log(direccionCompleta)


//2-Concatenacion: Template Literals
const nombre = 'Orlando'
const pais = '🇵🇪'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//3-Concatenacion: join()
const primerParte = 'Me encanta'
const segundaParte = 'Estudiar JS'
const terceraParte = 'y muchas mas lenguajes de programación'
const pensamiento = [primerParte, segundaParte, terceraParte]
console.log(pensamiento.join(' ')) //se pone un espacio dentro para que separe cada uno
console.log(pensamiento.join('⚽')) //se pone un espacio dentro para que separe cada uno

//4-Concatenacion: concat()

const hobbie1 = 'estudiar'
const hobbie2 = 'leer'
const hobbie3 = 'programar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ',' , hobbie2, ',', hobbie3)
console.log(hobbies)

//Caracteres de escape
// error --> const whatDoIDo = 'I'm Software Enginner'

    //1.Escape alternativo
    const escapeAlternativo = "I'm Software Enginner"
    //2.barra Invertida
    const escapeBarraInvertida = 'I\'m Software Enginner'
    //3.Template literals
    const escapeComillaInvertida = `I\'m Software Enginner`

//Escritura de String Largaso

/*
Las rosas son rojas,
las violetas son azules,
caracter inesperado,
En la línea 86.
*/

const poema =   'Las rosas son rojas,\n' +
                'las violetas son azules,\n' + 
                'caracter inesperado,\n' +
                'En la línea 86.'
console.log(poema)

const poema2=   'Las rosas son rojas,\n\
las violetas son azules,\n\
    caracter inesperado,\n\
En la línea 86.'
//cuidado co los espacios, les afecta
console.log(poema2)

const poema3=   `Las rosas son rojas,
las violetas son azules,
    caracter inesperado, 
En la línea 86.`
//cuidado co los espacios, les afecta
console.log(poema3)