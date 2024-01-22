{
    const findErrorNums = function(nums) {
        const set = new Set();
        let first,
            second;

        for(const num of nums) {
            if (set.has(num)) 
                first = num
            
            set.add(num)
        }

        for(let i = 1; i <= nums.length; i++) {
            if(!set.has(i)) {
                second = i
            }
        }

        return [first, second]
    };

    // console.log(findErrorNums([2,3,2]))
    // console.log(findErrorNums([1,2,3,3,5]))
    console.log(findErrorNums([3,2,3,4,6,5]))
}