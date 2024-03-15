//EJERCICIO ADMINISTRAR STACK

let libros = []

const agregarLibrosAction = 'addToLibros'
const eliminarLibrosAction = 'removeFromLibros'
const verLibrosAction = 'viewLibros'

function verLibros(){
    console.log(`Libros: `, libros )
}

function controlDeLibros(action,newBook,){
    switch (action) {
        case agregarLibrosAction:
            libros.push(newBook)
            break;
        case eliminarLibrosAction:
            if(libros.length === 0){
                console.log(`No hay libros para borrar`)
            }else{
                const eliminarLibro = libros.pop();
                console.log(`Se elimino el libro: ${eliminarLibro}`)
            }
            break;
        case verLibrosAction:
            verLibros()
            break;
        default:
            console.log(`Invalido`)
    }
}


controlDeLibros(agregarLibrosAction, `Piense y hagase rico`)
controlDeLibros(verLibrosAction)

controlDeLibros(agregarLibrosAction, `Padre Rico, Padre Pobre`)
controlDeLibros(verLibrosAction)

controlDeLibros(eliminarLibrosAction)
