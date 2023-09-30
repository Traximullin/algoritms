{
    const find132pattern = function(nums) {
        const stack: number[] = [];
        let third = Number.MIN_SAFE_INTEGER;

        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] < third) 
                return true;
            
            while (stack.length && stack[stack.length - 1] < nums[i]) {
                third = stack.pop() as number;
            }

            stack.push(nums[i]);
        }
        return false;
    };

    console.log(find132pattern([1,2,3,4]))
}