{
    function singleNumber(nums: number[]): number[] {
        const set: Set<number> = new Set();

        for (const num of nums)
            if (set.has(num)) {
                set.delete(num)
            } else {
                set.add(num)
            }
        

        return Array.from(set);
    };

    console.log(singleNumber([1,2,1,3,2,5]))
}