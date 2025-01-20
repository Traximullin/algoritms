{
    function increasingTriplet(nums: number[]): boolean {
        let a = Number.MAX_VALUE;
        let b = Number.MAX_VALUE;
        let c = Number.MAX_VALUE;

        for (let i = 0; i < nums.length; i++) {
            if (a > nums[i]) {
                a = nums[i];
            }

            if (b > nums[i] && nums[i] > a) {
                b = nums[i];
            }

            if (c > nums[i] && nums[i] > b) {
                return true;
            }

        }

        return false;
    };

    increasingTriplet([2,1,5,0,4,6]);
}