// switch (expresion) {
//     case valor1:
//         //codigo a ejecutar
//         break; //si se ejecuta bien, rompe el ciclo con break si no pasamos al siguiente caso
//     case valor2:
//         //codigo a ejecutar
//         break;
//     case valor3:
//         //codigo a ejecutar
//         break;
//     default:
//         //codigo a ejecutar cuando llegamos a default
//         break;
// }

let expresion = "Papayas"

switch(expresion){
    case "Naranjas":
        console.log("Las naranjas cuestan 4 soles el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan 3 soles el kilo")
        break;
    case "Plátanos":
        console.log("El plátano esta en 2 soles la mano")
        break
    case "Papayas":
    case "Mangos":
        console.log("Los mangos y las papayas cuentas 4.50 soles el kilo ")
        break;
    default:
        console.log(`Lo siento, no contamos con ${expresion}`)
}

