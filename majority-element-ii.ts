{
    const majorityElement = function(nums) {
        const result = {}

        nums.forEach(num => result[num] = (result[num] || 0) + 1)
        
        return Object
            .keys(result)
            .filter((num) => result[num] > nums.length / 3)
    };
}