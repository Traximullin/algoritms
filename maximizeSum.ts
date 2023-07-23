{
    const maximizeSum = function(nums, k) {
        let max = Math.max(...nums),
            sum = max

        for(let i = 1; i < k; i++) {
            sum += max + i
        }

        return sum
    };

    console.log(maximizeSum([5,5,5], 2))
}