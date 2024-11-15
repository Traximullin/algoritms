function helper(num: number) {
    return Number(num === 0)
}

function minOperations(nums: number[]): number {
    const length = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            const value  = [...nums].splice(i, 3).map(helper);
            console.log(value)
            nums.splice(i, 3, ...value);
        }
    }

    console.log(nums)

    console.log(nums)
};

console.log(minOperations([0,1,1,1]))