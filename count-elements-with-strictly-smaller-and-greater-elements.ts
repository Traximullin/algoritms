{
    function countElements(nums: number[]): number {
        nums = nums.sort((a, b) => a - b);
        let c = 0;

        for (let i = 1; i < nums.length; i++) {

            if (nums[i] > nums[0] && nums[i] < nums.at(-1)) {
                c += 1;
            }

        }

        return c;
    };

    console.log(countElements([11,7,2,15]))
}