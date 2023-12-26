{
    const singleNumber = function(nums) {
        // return nums.find(num => nums.indexOf(num) === nums.lastIndexOf(num))
        let a = 0, b = 0

        for (const num of nums) {
            b = (b ^ num) & ~a
            a = (a ^ num) & ~b
        }

        return b
    };

    console.log(singleNumber([2,2,3,2]))
}