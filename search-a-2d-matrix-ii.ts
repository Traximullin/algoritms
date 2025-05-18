{
    function searchMatrix(matrix: number[][], target: number): boolean {
        let r = 0, 
            c = matrix[0].length - 1;

        while(r < matrix.length && c >= 0){
            if (matrix[r][c] === target) 
                return true;

            if(target > matrix[r][c])
                r++;
            else
                c--;
        }
        
        return false
    };
}