// Arrow function
// Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

// Diferencias y limitaciones:

// No tiene sus propios enlaces a this o super y no se debe usar como métodos.
// No tiene argumentos o palabras clave new.target.
// No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
// No se puede utilizar como constructor.
// No se puede utilizar yield dentro de su cuerpo.

const greeting = function (name){
    return `Hi, ${name}`
}

//Arrow function - explicit return
const newGreeting  = name => { return `Hi, ${name}`}

//Arrow function - implicit return
const newGreetingImpicit  = name =>  `Hi, ${name}`
const newGreetingImpicitTwoParameters = (name, lastname) => `Hi, mi full name is ${name} ${lastname}`

//Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    menssageWhitTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    menssageWhitArrowlFunction:  (message) => {
        console.log(`${this.name} says: ${message}`) //sale undifined
    },
}

finctionalCharacter.menssageWhitTraditionalFunction('Whit great power comes great responsability.')
finctionalCharacter.menssageWhitArrowlFunction('Beware of Doctor Octopus.')
