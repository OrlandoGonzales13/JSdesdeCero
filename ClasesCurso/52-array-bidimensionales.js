let array1d = [1,2,3] // Unidimensional


let array2d= [[1,2,3], [4,5,7], [7,8,9]] //Bidimensional
let matrix = [
    [1,2,3],
    [4,5,7],
    [7,8,9]
]
console.log(matrix)

matrix[1][2] = 10
console.log(matrix)

let value = matrix[0][2]
console.log(value)


//Operations

//RECORRER ARRAY BIDIMENSIONAL
//primer for para iterar entre las filas
//segundo for para iterar entre las columnas
console.log("'RECORRER ARRAY BIDIMENSIONAL'")
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j])
    }
}

console.log("'ENCONTRAR ELEMENTO'")
function findElement(matrix, element){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === element){
                return true
            }
        }
    }
    return false    
}

console.log(findElement(matrix, 5))

function duplicateMatrix(matrix){
    let newMatrix = []
    for(let i=0;i<matrix.length;i++){
        newMatrix[i] = [...matrix[i]]
    }

    return newMatrix
}

console.log(duplicateMatrix(matrix))