{
    function checkXMatrix(grid: number[][]): boolean {
	    const size = grid.length;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const isDiagonal = j === i || j === size - i - 1;
        
                const currentElement = grid[i][j];

                if (isDiagonal ? currentElement === 0 : currentElement !== 0)
                    return false;
            }
        }

        return true;
    }
}