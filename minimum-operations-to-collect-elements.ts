{
    function minOperations(nums: number[], k: number): number {
        let c = 0;
        const set = new Set();

        while (nums.length > 0 && set.size !== k) {
            const num = nums.pop()!;
            c += 1;

            if (num <= k)
                set.add(num)
        }

        return c;
    };

    console.log(minOperations([3,1,5,4,2], 2))
}