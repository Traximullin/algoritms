{
    function minimumCost(nums: number[]): number {
        const [first] = nums.splice(0, 1);
        nums.sort((a, b) => a - b);

        return first + nums[0] + nums[1]
    };

    console.log(minimumCost([1,2,3,12]))
}