let cajaDeAndy = 'Woody';
console.log(cajaDeAndy)

// NO PERMITIDO:
//Textos no descriptivos, abreviados random etc

//Permitido
//Ser descriptivos, este codigo debemos entenderlo en un futuro
//nosotros y multiples personas. 



//Alcance (Scope):
    //var: Tiene un ámbito de función (function scope). Esto significa que la variable declarada con var es accesible en cualquier lugar dentro de la función en la que fue declarada. 
    //let y const: Tienen un ámbito de bloque (block scope). Esto significa que la variable declarada con let o const solo es accesible dentro del bloque (por ejemplo, dentro de un bucle for o una declaración if) en el que fue declarada.

//Reasignación:
    //var: Puede ser reasignada y redeclarada en el mismo ámbito. 
    //let: Puede ser reasignada, pero no redeclarada en el mismo ámbito. 
    //const: No puede ser reasignada ni redeclarada después de su inicialización. Sin embargo, ten en cuenta que si la variable es un objeto o un array, los elementos internos del objeto o array sí pueden ser modificados.


// Ejemplos:

// var
var x = 10;
var x = 20; // Esto es válido (redeclaración)
x = 30; // Esto es válido (reasignación)

// let
let y = 10;
// let y = 20; // Esto generará un error (redeclaración no permitida)
y = 30; // Esto es válido (reasignación)

// const
const z = 10;
// const z = 20; // Esto generará un error (redeclaración no permitida)
// z = 30; // Esto generará un error (reasignación no permitida)