{
    const maxProductDifference = function(nums) {
        const min0=Math.min(...nums)
        const maxN=Math.max(...nums)

        nums.splice(nums.indexOf(min0),1)
        nums.splice(nums.indexOf(maxN),1)

        const min1=Math.min(...nums)
        const maxM=Math.max(...nums)

        return maxM * maxN - min0 * min1
    };

    console.log(maxProductDifference([4,2,5,9,7,4,8]))
}