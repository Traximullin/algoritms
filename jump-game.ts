{
    function canJump(nums: number[]): boolean {
        // start [0]
        let end = nums.length - 1;

        for(let i = end - 1; i >= 0; i--) {
            if(nums[i] + i >= end) {
                end = i
            }
        }

        return end === 0
    };

    console.log(canJump([2,3,1,1,4]))
    console.log(canJump([3,2,1,0,4]))
}