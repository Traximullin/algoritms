{
    function duplicateNumbersXOR(nums: number[]): number {
        let r = 0;
        const map = new Map();
        
        for(const num of nums) {
            const new_value = (map.get(num) || 0 ) + 1
        
            map.set(num,new_value)
        }


        for (const num of nums) {
            const value = map.get(num)
            if (value === 2) {
                r ^= num
                map.delete(num)
            }
        }
        
        return r;
    };  

    console.log(duplicateNumbersXOR([1,2,2,1]))
    console.log(duplicateNumbersXOR([1,2,1,3]))
}