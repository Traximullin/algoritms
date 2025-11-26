function numIslands(grid: string[][]): number {
    let islands: number = 0
    for (let row: number = 0; row < grid.length; row++) { 
        for (let col: number = 0; col < grid[row].length; col++) { 
            if (grid[row][col] === '1') {
                removeIsland(grid, row, col)
                islands++
            }
        }
    }
    return islands
};

function removeIsland(grid: string[][], r: number, c: number): void {
    if (r >= 0 && c >=0 && r < grid.length && c < grid[r].length && grid[r][c] === '1') {
        grid[r][c] = '0';
        removeIsland(grid, r - 1, c)
        removeIsland(grid, r + 1, c)
        removeIsland(grid, r, c - 1)
        removeIsland(grid, r, c + 1)
    }
}