{
    function permute(nums: number[], combine: number[] = []): number[][] {
        const result: number[][] = [];

        if (nums.length == combine.length) {
            return [[...combine]]
        }

        for(let i = 0; i < nums.length; i++) {

            if (!combine.includes(nums[i])) {
                result.push(...permute(nums, [...combine, nums[i]]))
            }

        }


        return result;
    };

    console.log(permute([1,2,3]))
}