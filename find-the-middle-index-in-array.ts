{
    function findMiddleIndex(nums: number[]): number {
        let left_sum = 0; 

        for (let i = 0; i < nums.length; i++) {
            let right_sum = 0;
            
            for (let j = i + 1; j < nums.length; j++) {
                right_sum += nums[j]
            }

            if (left_sum === right_sum) {
                return i
            }
                
            left_sum += nums[i];
        }
        
        return -1
    };

    console.log(findMiddleIndex([2,3,-1,8,4]))
    console.log(findMiddleIndex([1,-1,4]))
    console.log(findMiddleIndex(2,5))
}