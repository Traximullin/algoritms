{
    function findMaxConsecutiveOnes(nums: number[]): number {
        let c = 0;
        let max = 0;

        for (const num of nums) {
            c += num;
            max = Math.max(max, c)

            if (num === 0) 
                c = 0;
        }

        return max
    };

    console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
}