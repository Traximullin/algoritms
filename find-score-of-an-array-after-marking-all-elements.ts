{
    function findScore(nums: number[]): number {
        let c = 0; 
        const set = new Set();
        
        const index_sorting = Array.from(nums.keys()).sort((a,b) => nums[a] - nums[b]);

        for (const index of index_sorting) {
            if (!set.has(index)) {
                c += nums[index];

                set.add(index - 1);
                set.add(index);
                set.add(index + 1);
            }
        }

        return c;
    };

    console.log(findScore([2,1,3,4,5,2]))
}