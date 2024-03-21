{
    function divideArray(nums: number[]): boolean {
        const hash = new Map();

        for(const num of nums) {
            const new_value = (hash.get(num) || 0) + 1;

            hash.set(num, new_value)
        }

        for(const num of nums) {
            if(hash.get(num) % 2 !== 0) 
                return false
        }

        return true
    };

    console.log(divideArray([1,2,3,4]))
}