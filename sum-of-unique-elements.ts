{
    const sumOfUnique = function(nums) {
        let result = 0;

        for(const num of nums) {
            if(nums.indexOf(num) === nums.lastIndexOf(num)) {
                result += num
            }
        }

        return result;
    };

    console.log(sumOfUnique([1,2,3,2]))
}