{
    const targetIndices = function(nums, target) {
        const result: number[] = [];

        nums.sort((a,b) => a-b).forEach((item, index) => {
            if(item === target){
                result.push(index);
            }
        })
        return result
    };

    targetIndices([1,2,5,2,3], 2)
}