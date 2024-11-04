{
    function findClosestNumber(nums: number[]): number {
        let min = Number.MAX_VALUE;
        let r = 0;

        for (const num of nums) {
            const num_abs = Math.abs(num);
            
            if (num_abs < min || (num_abs === min && num > r)) {
                min = num_abs;
                r = num;
            }
            
        }

        return r;
    };

    console.log(findClosestNumber([2,1,1,-1,100000]))
    // console.log(findClosestNumber([-4,-2,1,4,8]))
}