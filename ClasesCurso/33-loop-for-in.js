/*

for in  ---> objetos 
propiedad = valor

array, string (para esto es for of)

item 

for (variable in objeto){
    código
}

*/

const objetoCompras = {
    manzanas: 5,
    pera: 3,
    naranja:2,
    uva:1
}

for (fruta in objetoCompras){
    console.log(fruta)
}

for (fruta in objetoCompras){
    console.log(`${fruta} : ${objetoCompras[fruta]}`)
}