{
    const singleNumber = function(nums) {
        for(let num of nums) {
            if(nums.indexOf(num) === nums.lastIndexOf(num)) {
                return num
            }
        }
    }

    console.log(singleNumber([2,2,1]))
}