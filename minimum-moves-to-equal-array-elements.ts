{
    function minMoves(nums: number[]): number {
        let c = 0;
        const min = Math.min(...nums);

        for (const num of nums) {
            c += num - min
        }

        return c
    };

    console.log(minMoves([1,2,3]))
}