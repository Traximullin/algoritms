{
    function maxFrequencyElements(nums: number[]): number {
        const hash = new Map();
        let max = 0;
        
        let c = 0;

        for(let num of nums) {
            const value = (hash.get(num) || 0) + 1
            const currentMax = max;

            max = Math.max(value, max)

            if(currentMax !== max) {
                c = 0;
            }

            if(value === max) {
                c += max;
            }
        
            hash.set(num, value)
        }

        return c
    };
 
    console.log(maxFrequencyElements([1,2,2,3,1,4]))
}