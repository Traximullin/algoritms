{
    function sortedSquares(nums: number[]): number[] {
        const result: number[] = [];

        let start = 0,
            end = nums.length - 1;
        let length = end;

        while(start <= end) {
            const startPow = nums[start] ** 2;
            const endPow = nums[end] ** 2

            if(startPow > endPow) {
                result[length] = startPow
                start++
            } else {
                result[length] = endPow
                end--
            }

            length--
        }
        
        return result
    };

    console.log(sortedSquares([-4,-1,0,3,10]))
    console.log(sortedSquares([-7,-3,2,3,11]))
}