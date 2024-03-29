{
    // !TODO
    // https://leetcode.com/problems/pascals-triangle/
    const generate = function(numRows) {
        const result: number[][] = []
    
        for (let i = 0; i < numRows; i++) {
            result[i] = [1]
            
            for (let j = 1; j < i; j++) {
                result[i][j] = result[i-1][j-1] + result[i-1][j]
            }
            
            result[i][i] = 1;
        }

        return result
    };

    console.log(generate(5))
}