{
    function smallestEqual(nums: number[]): number {
       for(let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if(num === i % 10) {
                return i
            }
       }

       return -1
    };

    console.log(smallestEqual([0,1,2]))
}