{
    var removeDuplicates = function(nums) {
        for(let num of nums) {
            if(nums.lastIndexOf(num) - nums.indexOf(num) + 1 >= 3) {
                nums.splice(nums.indexOf(num), nums.lastIndexOf(num) - 1)
            }
        }

        return nums
    };

    console.log(removeDuplicates([1,1,1,1,1,1,1,2,2,3]))
}