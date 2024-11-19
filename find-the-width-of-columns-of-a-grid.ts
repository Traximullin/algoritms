{
    function findColumnWidth(grid: number[][]): number[] {
        const result = new Array<number>(grid[0].length).fill(0);

        for(let i = 0; i < grid.length; i++) {

            for(let j = 0; j < grid[i].length; j++) {
                const current_length = String(grid[i][j]).length;
                
                if(result[j] < current_length) 
                    result[j] = current_length
            }
        }

        return result;
    };

    console.log(findColumnWidth([[1],[22],[333]]))
}