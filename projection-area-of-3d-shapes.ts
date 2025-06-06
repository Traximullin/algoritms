{
    function projectionArea(grid: number[][]): number {
        const xMap: Record<number, number> = {};
        const yMap: Record<number, number> = {};

        let xSum = 0;
        let ySum = 0;
        let emptys = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                const x = i + 1;
                const y = j + 1;
                const z = grid[i][j];

                const xCurr = xMap[x] | 0;
                if (z > xCurr) {
                    xSum += z - xCurr;
                    xMap[x] = z;
                }

                const yCurr = yMap[y] | 0;
                if (z > yCurr) {
                    ySum += z - yCurr;
                    yMap[y] = z;
                }

                if (z === 0) {
                    emptys++;
                }
            }
        }

        return xSum + ySum + Math.pow(grid.length, 2) - emptys;
    };
}