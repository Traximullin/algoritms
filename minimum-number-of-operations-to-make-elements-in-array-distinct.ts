{
    function minimumOperations(nums: number[]): number {
        const set = new Set();
        let c = 0;

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) {
                set.clear();
                nums.splice(0, 3);
                i = 0;
                c += 1;
            }
            set.add(nums[i]);
        }

        return c;
    };

    console.log(minimumOperations([1,2,3,4,2,3,3,5,7]))
}