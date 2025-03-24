{
    function searchMatrix(matrix: number[][], target: number): boolean {
        let m = matrix.length, 
            n = matrix[0].length,
            left = 0, 
            right = m * n - 1;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midValue = matrix[Math.floor(mid / n)][mid % n];
    
            if (midValue === target) 
                return true;
            else if (midValue < target)
                left = mid + 1;
            else 
                right = mid - 1;
        }
    
        return false;
    }
    

    console.log(searchMatrix([[1]], 1))
}