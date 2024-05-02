{
    function findMaxK(nums: number[]): number {
        const set = new Set();
        let r = -1;

        for (const num of nums) {
            const num_abs = Math.abs(num);
            const search_num = num * -1

            if (set.has(search_num)) 
                r = Math.max(r, num_abs);
            else 
                set.add(num)

        }

        return r
    };

    console.log(findMaxK([-1,10,6,7,-7,1]))
}