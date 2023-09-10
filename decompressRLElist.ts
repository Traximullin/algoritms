{
    const decompressRLElist = function(nums) {
        let count = 0, result = [];
        while(count < nums.length) {
            let i = 0;
            while(i < nums[count]) {
                result.push(nums[count+1])
                i++;
            }
            count += 2;
        }
        return result;
    };
}