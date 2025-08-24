{
    function minimumArea(grid: number[][]): number {
        const row = grid.length, col = grid[0].length;
        
        let minrow = row,
            mincol = col,
            maxrow = 0,
            maxcol = 0,
            allzero= true;

        for (let i=0; i<row; i++) {
            for (let j=0; j < col; j++) {
                if (grid[i][j]) {
                    minrow = Math.min(i, minrow);
                    mincol = Math.min(j, mincol);
                    maxrow = Math.max(i, maxrow);
                    maxcol = Math.max(j, maxcol);
                    allzero = false;
                }
            }
        }

        return allzero ? 0 : (maxrow-minrow+1)*(maxcol-mincol+1);
    };
}