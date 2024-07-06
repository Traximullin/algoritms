{
    function moveZeroes(nums: number[]): void {
        const zeros = [];
    
        for (let i = 0; i < nums.length; i++) 
            if (nums[i] === 0) {
                nums.splice(i, 1)
                zeros.push(0)
                i-= 1
            }
    
            
        nums.push(...zeros)
    };

    console.log(moveZeroes([0,0,1]))
}