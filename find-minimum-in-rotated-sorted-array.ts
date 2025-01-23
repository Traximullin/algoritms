{
    // todo
    function findMin(nums: number[]): number {
        if (nums.length < 2) {
            return nums[0];
        }

        const mid = ~~(nums.length / 2);

        let min = nums[mid];
        console.log(mid)
        if (nums[0] > nums[mid]) {
            for (let i = mid; i < nums.length; i++) {
                min = Math.min(nums[i], min)
            }
        } else {
            for (let i = 0; i < mid; i++) {
                min = Math.min(nums[i], min)
            }
        }

        return min
    };

    console.log(findMin([3,4,5,1,2]));
    // console.log(findMin([11,13,15,17]))
}