{
    function surfaceArea(grid: number[][]): number {
        const l = grid.length;
        let zArea = 0;
        let xArea = 0;
        let yArea = 0;
    
        for (let i = 0; i < l; i++) {
            let xCurr = 0;
            let yCurr = 0;
    
            for (let j = 0; j < l; j++) {
                if (grid[i][j]) {
                    zArea += 2;
                }
    
                xArea += Math.abs(grid[i][j] - xCurr);
                xCurr = grid[i][j];
    
                yArea += Math.abs(grid[j][i] - yCurr);
                yCurr = grid[j][i];
            }
    
            xArea += xCurr;
            yArea += yCurr;
        }
    
        return xArea + yArea + zArea;
    }
    
}