{
    function oddCells(m: number, n: number, indices: number[][]): number {
        const matrix = Array.from({ length: m }, () => Array(n).fill(0))
        const rows = matrix.length
        const cols = matrix[0].length
    
        for (const e of indices) {
        for (let i = 0; i < e.length; i++) {
            if (i === 0) {
            for (let j = 0; j < cols; j++) matrix[e[0]][j] += 1
            } else {
            for (let k = 0; k < rows; k++) matrix[k][e[1]] += 1
            }
        }
        }
    
        let count = 0
        for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] % 2 !== 0) count++
        }
        }
    
        return count
    }
}