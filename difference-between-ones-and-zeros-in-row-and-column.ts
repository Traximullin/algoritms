{
    const onesMinusZeros = function(grid) {
        const m = grid.length;
        const n = grid[0].length;
      
        const row = new Uint32Array(m);
        const col = new Uint32Array(n);
      
        for (let i = 0; i < m; ++i) {
          for (let j = 0; j < n; ++j) {
              row[i] += grid[i][j] * 2;
              col[j] += grid[i][j] * 2;
          }
        }
      
        for (let i = 0; i < m; ++i) {
          for (let j = 0; j < n; ++j) {
            grid[i][j] = row[i] + col[j] - m - n;
          }
        }
      
        return grid;
    };
}