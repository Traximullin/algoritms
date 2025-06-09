{
    function findKthLargest(nums: number[], k: number): number {
        let max = -1;
        const arr = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
                arr.push(nums[i]);
            } else {
                arr.unshift(nums[i]);
            }
        }

        console.log(arr)
    };

    console.log(findKthLargest([3,2,1,5,6,4], 2))
}