//METODOS QUE MODIFICAN EL ARRAY ORIGINAL (MUTABILITY)

// shift( )

const colors = ['yellow', 'blue', 'red']
const removedColors = colors.shift()

console.log(colors)
console.log(removedColors)

//unshift( )

const newColors = colors.unshift('pink', 'purple')

console.log(colors)
console.log(newColors)

//ejercicio manejar playlist

function controlPlaylist (playlist, newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['Mujer Divina' , 'El Cantante', 'Caricias prohibidas']
const newSongToAdd = 'Pedro Navaja'

console.log('Initial Playlist: ', initialPlaylist)

const updatedPlaylist =  controlPlaylist(initialPlaylist, newSongToAdd)

console.log('New song to add: ', newSongToAdd)
console.log('Updated playlist:  ', updatedPlaylist)