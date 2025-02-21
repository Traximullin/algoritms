class NeighborSum {
    private grid: number[][];
    private indexMap: Map<number, [number, number]>;

    constructor(grid: number[][]) {
        this.grid = grid;
        this.indexMap = new Map();

        // Cache the indexes of each value
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                this.indexMap.set(grid[i][j], [i, j]);
            }
        }
    }

    private getValue(row: number, col: number): number {
        if (row >= 0 && row < this.grid.length && col >= 0 && col < this.grid[0].length) {
            return this.grid[row][col];
        }
        return 0;
    }

    adjacentSum(value: number): number {
        const [row, col] = this.indexMap.get(value)!;
        // Calculate the sum of adjacent neighbors
        const top = this.getValue(row - 1, col);
        const bottom = this.getValue(row + 1, col);
        const left = this.getValue(row, col - 1);
        const right = this.getValue(row, col + 1);
        return top + bottom + left + right;
    }

    diagonalSum(value: number): number {
        const [row, col] = this.indexMap.get(value)!;
        // Calculate the sum of diagonal neighbors
        const topLeft = this.getValue(row - 1, col - 1);
        const topRight = this.getValue(row - 1, col + 1);
        const bottomLeft = this.getValue(row + 1, col - 1);
        const bottomRight = this.getValue(row + 1, col + 1);
        return topLeft + topRight + bottomLeft + bottomRight;
    }
}