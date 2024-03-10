// call() es un método que se utiliza para invocar (llamar) 
// a otra función con un valor específico para this (el contexto de ejecución) 
// y con argumentos proporcionados de forma individual.

const owner = 'Orlando'
const address =  '123 Avenue'

function dogGreeting(owner, address){
    console.log(`Hi I'm ${this.dogName} I live whit ${owner} on ${address}`)
}

const newHouse = {
    dogName:  'Coconut'
}

dogGreeting.call(newHouse, owner, address)

// apply() es una función en JavaScript 
// que se utiliza para llamar a otra función
//  con un valor específico para this y un array (o un objeto similar a un array) de argumentos.

const necessaryValues =[owner, address]
dogGreeting.apply(newHouse, necessaryValues)

// bind() crea una nueva función, que cuando es llamada, 
// asigna a su operador this el valor entregado, 
// con una secuencia de argumentos dados precediendo a 
// cualquiera entregados cuando la función es llamada.

const bindingWhitBind = dogGreeting.bind(newHouse, owner, address)
bindingWhitBind()


const caricatura = {
    nombre: 'vaca y pollito'
}

function recuerdo(personaje){
    console.log(`${this.nombre} era mi caricatura favorita. Me encanta ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'vaca');//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de vaca

recuerdo.apply(caricatura, ['pollito']);//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de pollito

const recuerdoBind = recuerdo.bind(caricatura, 'pollito');
recuerdoBind();//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de pollito