/*
    Operadores de comparación
*/
// == (Igualdad): Evalúa si los valores son iguales con conversión de tipo. Devuelve true.
// === (Igualdad estricta): Evalúa si los valores son iguales y del mismo tipo. Devuelve false.
// != (Desigualdad): Evalúa si los valores no son iguales con conversión de tipo. Devuelve false.
// !== (Desigualdad estricta): Evalúa si los valores no son iguales y no son del mismo tipo. Devuelve true.
// > (Mayor que): Evalúa si el valor de la izquierda es mayor que el de la derecha. Devuelve true.
// < (Menor que): Evalúa si el valor de la izquierda es menor que el de la derecha. Devuelve false.
// >= (Mayor o igual que): Evalúa si el valor de la izquierda es mayor o igual que el de la derecha. Devuelve true.
// <= (Menor o igual que): Evalúa si el valor de la izquierda es menor o igual que el de la derecha. Devuelve false.

const a=10;
const b=20;
const c="10"

a==b; //false  (diferente en valor)
a===c; //false () (diferente en valor y tipo de dato)
a!=b; //true (no es igual en valor)
a!==c; //true (no es igual  en valor y tipo de dato)
a>b; //false (a es menor que b)
a<=b; //true (a es mejor que b)
a>=b; //false (a es menor que b)
a>c; //false 