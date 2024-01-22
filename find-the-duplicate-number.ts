{
    const findDuplicate = function(nums) {
        const set = new Set();

        for(const num of nums) {
            if(set.has(num)) 
                return num

            set.add(num)
        }

    };

    console.log(findDuplicate([1,3,4,2,2]))
}