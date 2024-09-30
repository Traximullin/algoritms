{
    function search(nums: number[], target: number): number {
        let mid = ~~(nums.length / 2);
    
        console.log(nums[mid])

        if (nums[mid] === target) return mid;

        const start_index = (nums[mid] > target || nums.at(-1) < target) ? 0 : mid;

        for (let i = start_index; i < nums.length; i++) {
            if (nums[i] == target)
                return i
        }
    
        return -1;
    };

    console.log(search([3,1], 2))
}