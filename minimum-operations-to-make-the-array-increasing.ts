{
    const minOperations = function(nums) {
        let result = 0;

        for(let i = 0; i < nums.length - 1; i++) {
            if(nums[i + 1] <= nums[i]) {
                const diff = nums[i] - nums[i + 1] + 1;

                nums[i + 1] = nums[i + 1] +  diff;

                result += diff;
            }

        }

        return result
    };

    console.log(minOperations([1,1,1]))
}