{
    function canBeIncreasing(nums: number[]): boolean {
        let c = 0;
        let prevValue = nums[0];

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] >= nums[i + 1]) {
                c += 1;
                if(prevValue <= nums[i + 2]) {
                    nums.splice(i, 1);
                } else {
                    nums.splice(i + 1, 1);
                }

                prevValue = nums[0]
                i = -1;
            } else {
                prevValue = nums[i]
            }

            if (c == 2)
                return false

        }

        return true;
    };

    console.log(canBeIncreasing([100,21,100]))
    console.log(canBeIncreasing([1,2, 10 ,5,7]))
    console.log(canBeIncreasing([2,3,1,2]))
}