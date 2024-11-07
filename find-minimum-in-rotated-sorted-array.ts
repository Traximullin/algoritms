{
    // todo
    function findMin(nums: number[]): number {
        const avg = ~~(Math.abs(nums[0] + nums.at(-1)) / 2);

        const mid = Math.ceil(nums.length / 2);

        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }

        console.log(nums[mid])
        console.log(avg)
        if (nums[mid] > avg) {
            // return findMin(nums.splice(mid, nums.length));
        } else {
            return findMin(nums.splice(0, mid));
        }
    };

    // console.log(findMin([3,4,5,1,2]));
    console.log(findMin([11,13,15,17]))
}