function equalPairs(grid: number[][]): number {
    const rowStrings = grid.map(row => row.join('-')); 
    const columnStrings: string[] = [];

    for (let i = 0; i < grid[0].length; i++) {
        let column: string[] = [];

        for (let j = 0; j < grid.length; j++) 
            column.push(grid[j][i].toString());
        
        columnStrings.push(column.join('-')); 
    }

    let c = 0;

    for (const row of rowStrings) 
        for (const column of columnStrings) 
            if (row === column) 
                c += 1; 

    return c;
}


console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))