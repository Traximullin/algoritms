{
    function diagonalSum(mat: number[][]): number {
        if (mat.length === 1) 
            return mat[0][0];
        
        let c = 0;

        for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
            if (i !== j) {
              c += mat[i][j];
            }
            c += mat[i][i];
        }
      
        return c;
      };
}