{
    const islandPerimeter = function(grid) {
        let result = 0
    
        const getConnect = (i, j) => {
            let count = 0

            if (grid?.[i - 1]?.[j]) count++
            if (grid?.[i + 1]?.[j]) count++
            if (grid?.[i]?.[j + 1]) count++
            if (grid?.[i]?.[j + 1]) count++
            
            return count
        }
        
        for (let i = 0 ; i < grid.length; i++) {
            for (let j = 0 ; j < grid?.[0]?.length; j++) {
                if (grid[i][j]) {
                    result += 4 - getConnect(i, j)
                }
            }
        }
        
        return result
    };

    console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))
}