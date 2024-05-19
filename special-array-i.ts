{
    function isArraySpecial(nums: number[]): boolean {
        
        for (let i = 1; i < nums.length; i++) {
            const parity_1 = nums[i] % 2 
            const parity_2 = nums[i - 1] % 2
        
            if (parity_1 === parity_2) {
                return false
            }
        }

        return true
    };
    console.log(isArraySpecial(1))
    console.log(isArraySpecial([2,1,4]))
    console.log(isArraySpecial([4,3,1,6]))
}