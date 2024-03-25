{
    function findDuplicates(nums: number[]): number[] {
        const hash = new Set();
        
        return nums.filter(num => {
            if(hash.has(num)) {
                return true
            } else {
                hash.add(num)
            }
        })

    };

    console.log(findDuplicates([4,3,2,7,8,2,3,1]))
    console.log(findDuplicates([4,3,2,7,8,2,3,1]))
}