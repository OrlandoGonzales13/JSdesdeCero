//Funciones puras
    // Una función pura es aquella que, dado el mismo conjunto de entradas, siempre producirá la misma salida sin tener efectos secundarios observables.
        // - No dependen ni modifican variables fuera de su ámbito local.
        // - No realizan operaciones que afecten al estado del programa, como la manipulación de variables globales, la modificación de archivos, la entrada/salida, etc.
        // - Son predecibles y fáciles de probar ya que no tienen efectos secundarios.

//Side Effects
// 1.Modificar variables globales
// 2.Modificar parametros de una funcion
// 3. Solicitudesu HTTP 
// 4.Imprimir mensajes en pantalla o consola
// 5.Manipulacion del DOM
// 6.Obtener la hora actual


//funcion pura
function sum(a, b) {
    return a + b
}

function square(x){
    return x * x
}

function addTen(y){
    return y + 10
}

const number = 5 
const finalResult = addTen(square(number))
console.log(finalResult)


//funcion impuras
function sum(a, b) {
    console.log('A: ', a) // --> tiene un side effect
    return a+b
}

let total = 0

function sumWhithSideEffect (a) {
    //total = total + a (abajo esta simplificado)
    total += a
    return total
}






