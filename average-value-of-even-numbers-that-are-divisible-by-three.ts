{
    function averageValue(nums: number[]): number {
        let c , sum;
        c = sum = 0;

        for (const num of nums) {
            if (num % 6 === 0) {
                c++
                sum += num;
            }
        }

        return Math.floor(sum / c ) || 0
    };

    console.log(averageValue([43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21 ,77,82,30,94,55,76,94,51]    ))
}