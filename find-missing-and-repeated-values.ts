{
    function findMissingAndRepeatedValues(grid: number[][]): number[] {
        const set = new Set();

        let dup = 0;
        
        for(const nums of grid) {
            for(const num of nums) {
                if(set.has(num)) {
                    dup = num
                } else {
                    set.add(num)
                }
            }
        }
        
        for(let i = 1; i <= set.size + 1; i++) {
            if(!set.has(i)) {
                return [dup, i]
            }
        }
    };

    // console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))
    console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]))
}