{
    const differenceOfSum = function(nums) {
        const numSum = nums.reduce((prev, curr) => prev + curr,0) 
        const charSum = nums.join("").split("").reduce((prev,curr) => +prev + +curr, 0)

        return numSum - charSum
    };

    console.log(differenceOfSum([1,15,6,3]))
}