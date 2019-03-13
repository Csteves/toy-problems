


let x = [[1,1],[2,5],[2,2],[3,10],[4,13]]
// matrice m X r |  m === 5 == size of matrice length
// r in this example is equal to 2 because each matrice is of length 2
        //a(m...i)(n...j)
        // Specifing a loaction = A:Matrix i:m j:n = Aij
        // since this 5m x 2r  i = 0-4 & j = 0-1
        //ie.. A(2,1)
 // visualized A(2,1)    [ [1] [2] [2] [3]  [4]  ]
            //          [ [1] [5] *[2]* [10] [13]]
function sumMatrix(matrix){
    let sum = 0;
    for (let i = 0; i < matrix.length; i++){
        var currentRow = matrix[i];
        for(let i = 0; i < currentRow.length; i++){
            sum += currentRow[i];
        }
    }
    return sum;
}
function getItem(matrix,coordinates){
    // coordinates = an array representing i & j [i,j]
    let item  = matrix[coordinates[0]][coordinates[1]];
    return item;
}

console.log(sumMatrix(x))
console.log(getItem(x,[1,1]))