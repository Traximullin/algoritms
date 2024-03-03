{
    function repeatedNTimes(nums: number[]): number {
        const hash = new Map();
        const search = nums.length / 2

        return nums.find(num => {
            const count = (hash.get(num) || 0) + 1

            hash.set(num, count)
            
            if(count === search) {
                return num
            }
        }) || 0
    };

    console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))
}