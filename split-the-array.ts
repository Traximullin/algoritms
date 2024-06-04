{
    function isPossibleToSplit(nums: number[]): boolean {
        const hash = new Map();

        for (const num of nums) {
            const value = (hash.get(num) || 0) + 1
        
            if (value > 2) {
                return false
            }

            hash.set(num, value)
        }


        return true
    };

    console.log(isPossibleToSplit([1,1,2,2,3,4]))

}