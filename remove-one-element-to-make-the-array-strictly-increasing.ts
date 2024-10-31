{
    const helper = (nums: number[]) => {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] >= nums[i])
                return false

        }

        return true;
    }

    function canBeIncreasing(nums: number[]): boolean {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] >= nums[i]) {
                const sliced = [...nums]
                sliced.splice(i - 1, 1);
                
                if (helper(sliced))
                    return true
                else {
                    const sliced = [...nums]
                    sliced.splice(i, 1);

                    return helper(sliced);
                }
            }
        }

        return true
    };

    console.log(canBeIncreasing([100,21,100]))
    console.log(canBeIncreasing([1,2, 10 ,5,7]))
    console.log(canBeIncreasing([2,3,1,2]))
}