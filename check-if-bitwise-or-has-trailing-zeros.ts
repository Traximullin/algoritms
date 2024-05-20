{
    function hasTrailingZeros(nums: number[]): boolean {
        let c = 0;

        for (const num of nums) {
            if (num % 2 === 0)
                c++

            if (c >= 2) {
                return true
            }
        }

        return c > 1
    };

    console.log(hasTrailingZeros([1,2,3,4,5]))

}