//Estos metodos no mdoficar el array original (Inmutabilidad)

const morseCode1 = ['....','----'] // H O
const morseCode2 = ['.-..','.-'] //L A

//Combine whit concat() . way 1

const morseCodeMessage = morseCode1.concat(morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)


//Combine whit concat() . way 2
const morseCodeMessage2 = [].concat(morseCode1, morseCode2)
console.log(morseCodeMessage2)

//Combine whit Spread Operator 
function combineMorseMessages(morseCode1, morseCode2){
    console.log(  [...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1, morseCode2)

const numbers = [1,2,3]
const string = 'string'

combineMorseMessages(numbers, string)

//join ()

const morseCodeMessageString = morseCodeMessage.join('')
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)