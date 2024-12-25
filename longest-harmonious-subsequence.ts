{
    function findLHS(nums: number[]): number {
        const map = new Map();
        let max = 0;
    
        for (const num of nums) 
            map.set(num, (map.get(num) || 0) + 1);
    
        map.forEach((count, num) => {
            const next = map.get(num + 1);
    
            if (next)
                max = Math.max(max, count + next);
        })
    
        return max;
    };

    console.log(findLHS([-1,0,-1,0,-1,0,-1]))
}