//String primitivos

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivo2 = String('Soy un string primitivo 2')
console.log(typeof stringPrimitivo2)


//String objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres

const saludo = 'Hola, ¿Como estás?'

//Acceder a una letra por su índice.
console.log(saludo[2]) //1
console.log(saludo.charAt(2)) //1

//conocer el indice de una letra
console.log(saludo.indexOf('a')) //3

//Conocer dónde inicia una palabra
console.log(saludo.indexOf('Como')) // 7

//Conocer si existe una palabra dentro de un texto, en caso de no existir se devolverá -1.
console.log(saludo.indexOf('como')) // -1 xq no existe 

//Conocer la última posición de una letra
console.log(saludo.lastIndexOf('o')) //10 ultima 'o'

//Extraer letras entre un determinado rango. Ingresar el índice inicial y el final más 1.
console.log(saludo.slice(7,17)) //Como estás

//conocer la longitud de un string
console.log(saludo.length) //18 

//Colocar todo el texto en mayúscula
console.log(saludo.toLocaleUpperCase()) //MAYUSCULAS

//Colocar todo el texto en minúscula
console.log(saludo.toLocaleLowerCase()) //MAYUSCULAS

//Dividir un string. Con el método split colocar la forma como se quiere dividir en medio de las comillas.
const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
//Para acceder a las posiciones del texto dividido
console.log(saludoDividido[1])

//Si se quiere eliminar los espacios de más
const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

//Si se quiere reemplazar alguno de los caracteres
const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '🌎')
console.log(nuevoSaludo)
