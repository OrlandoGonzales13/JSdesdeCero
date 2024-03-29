// OPERADORES LOGICOS

// Los operadores lógicos se utilizan para determinar la lógica entre variables o valores. Estos operadores siempre devuelven un valor booleano, es decir, true (verdadero) o false (falso).
// Aquí tienes una lista de los operadores lógicos más comunes:

// && (AND): Devuelve true si ambos operandos son verdaderos.
// || (OR): Devuelve true si al menos uno de los operandos es verdadero.
// ! (NOT): Devuelve true si el operando es falso y false si el operando es verdadero.

// A continuación, hay algunos ejemplos de código que muestran cómo funcionan estos operadores lógicos:

let a = true;
let b = false;

console.log(a && b); // Imprime: false
console.log(a || b); // Imprime: true
console.log(!a);     // Imprime: false
console.log(!b);     // Imprime: true

// En estos ejemplos, a es verdadero y b es falso. Cuando utilizamos && (AND), 
// JavaScript devuelve true solo si a y b son ambos verdaderos, que en este caso no lo son, por lo que devuelve false. 
// Cuando utilizamos || (OR), JavaScript devuelve true si al menos a o b es verdadero, que en este caso a es verdadero, por lo que devuelve true. 
//Cuando utilizamos ! (NOT), JavaScript invierte el valor booleano, entonces !a devuelve false y !b devuelve true.


// Ejemplo de la clase en Platzi.
const a = 10;
const b = 20;
const c = "10";

a == b && a === c;
a != b || a === c;
!(a === c);

// Este fragmento de código JavaScript representa operaciones de comparación y lógicas.

// a == b && a === c;: Esta línea está realizando dos comparaciones utilizando los operadores == y ===.
// a == b: Comprueba si a es igual a b en valor. En este caso, a (10) no es igual a b (20), por lo que esta comparación devuelve false.
// a === c: Comprueba si a es igual a c en valor y tipo. Aunque a (10) es igual a c ("10") en valor, no son del mismo tipo (a es un número y c es un string) por lo que esta comparación devuelve false.
// La operación completa utiliza el operador && (AND lógico), que devuelve true si ambas comparaciones son verdaderas. Como ambas comparaciones son false, la operación completa devuelve false.

// a != b || a === c;: Similar a la línea anterior, pero utilizando los operadores != y ===, y el operador || (OR lógico).
// a != b: Comprueba si a es diferente de b en valor. En este caso, a (10) es diferente de b (20), por lo que esta comparación devuelve true.
// a === c: Como se mencionó anteriormente, esta comparación devuelve false.
// La operación completa devuelve true si alguna de las comparaciones es verdadera. Como a != b es verdadero, la operación completa devuelve true.

// !(a === c);: Esta línea está utilizando el operador de negación ! para invertir el resultado de la comparación a === c. Como a === c es false, !(a === c) devuelve true.