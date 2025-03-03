{
    function pivotArray(nums: number[], pivot: number): number[] {
        const start = [];
        const middle = [];
        const end = [];

        for (const num of nums) {
            if (num === pivot) {
                middle.push(num);
                continue;
            }
            
            if (num > pivot)
                end.push(num)
            else 
                start.push(num)
        }

        return [...start, ...middle, ...end];
    };

    console.log(pivotArray([9,12,5,10,14,3,10], 10))
}