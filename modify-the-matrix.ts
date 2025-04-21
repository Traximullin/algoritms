{
    function modifiedMatrix(matrix: number[][]): number[][] {
        const columns = matrix[0].map((_, colIndex) =>
            matrix.map(row => row[colIndex])
        );
        
        return matrix.map((row) => row.map((val, colIndex) => {
                if (val == -1)
                    return Math.max(...columns[colIndex])
            
               return val
            }
        ))
    };


    console.log(modifiedMatrix([[1,2,-1],[4,-1,6],[7,8,9]]))
}