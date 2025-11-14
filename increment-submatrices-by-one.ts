{
    function rangeAddQueries(n: number, queries: number[][]): number[][] {
        const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
        
        for (const [r1, c1, r2, c2] of queries) {
            for (let i = r1; i <= r2; i++) {
                matrix[i][c1]++   
                if (c2 + 1 < n) {   
                    matrix[i][c2 + 1]--
                }
            }
        }

        for (const row of matrix) {
            for (let i = 1; i < n; i++) {
                row[i] += row[i - 1]
            }
        }

        return matrix
    }
}