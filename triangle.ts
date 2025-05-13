{
    function minimumTotal(triangle: number[][]): number {
        const dp = Array(triangle.length + 1).fill(0);

        for (let i = triangle.length - 1; i >= 0; i--) {
            const row = triangle[i];

            for (let j = 0; j < row.length; j++) {
                dp[j] = row[j] + Math.min(dp[j], dp[j + 1]);
            }
        }
        console.log(dp)
        return dp[0];
    };

    console.log(minimumTotal([
            [-1], 
            [2], 
           [2,3], 
          [1,-1, 3]
    ]))
}