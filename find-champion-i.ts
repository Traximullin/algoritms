{
    const findChampion = function (grid) {
        if (grid.length === 1) 
            return 0;
        
        let count = 0;
        let team = 0;
        
        for (let i = 0; i < grid.length; i++) {
            const c = grid[i].filter(el => el === 1).length;
            
            if (c > count) {
                count = c;
                team = i;
            };
            
        }

        return team;
    };
}