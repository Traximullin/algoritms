{
    // todo 
    function dominantIndex(nums: number[]): number {
        const max = Math.max(...nums);
        const diff = max / 2;
        let search;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (num === max) {
                search = i;
                continue;
            }

            if (diff < num) {
                return -1;
            }
        }

        return search;

    };

    console.log(dominantIndex([3,6,1,0]))
}