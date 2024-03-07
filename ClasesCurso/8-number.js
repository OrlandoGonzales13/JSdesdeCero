//1. Tipo Entero y Decimal
    //ambos son number
    const entero = 42
    const decimal = 3.14
    console.log(typeof entero, typeof decimal)

//2.Notación científica
    const cientifico = 5e3
    console.log(typeof cientifico)

//3.Infinitos y Na
    const infinitos = Infinity
    const noEsUnNumero = NaN
    console.log(typeof infinitos, typeof noEsUnNumero)

//Operaciones Aritméticas

    //1.Suma, resta, mult, divi
    const suma = 3 + 3 
    const resta = 5 - 2
    const mult = 5*9
    const divi = 99/9
    console.log(suma, resta, mult, divi)

    //2.Módulo y exponenciacion
    const modulo = 15 % 8
    const exponenciacion = 2**3
    console.log(modulo, exponenciacion)

//Precisión
//Por su problema de precisión no es recomendable para comparar, porque aunque se compare con el valor que debería dar, genera un resultado equivocado.
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado === 0.3)

//Operacion Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const numeroAleatorio = Math.random()
console.log(raizCuadrada, valorAbsoluto, numeroAleatorio)