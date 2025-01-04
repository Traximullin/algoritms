{
    function setZeroes(matrix: number[][], cols = matrix[0].length, rows = matrix.length): void {
        const col  = Array(cols).fill(false);
        const row  = Array(rows).fill(false);
    
        for (let i = 0; i < rows; i++) 
            for (let j = 0; j < cols; j++)
                if (matrix[i][j] === 0) {
                    col[i] = true;
                    row[j] = true;
                }

        for (let i = 0; i < rows; i++)
            for (let j = 0; j < cols; j++) 
                if (col[i] || row[j]) 
                    matrix[i][j] = 0

    };

    console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
}