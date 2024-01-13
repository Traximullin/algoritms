{
    const frequencySort = function(nums) {
        const hashMap = new Map();

        for (const num of nums) {
            hashMap.set(num, (hashMap.get(num) || 0) + 1)
        }

        return nums.sort((a,b) => 
            hashMap.get(a) === hashMap.get(b)
                ? b - a
                : hashMap.get(a) - hashMap.get(b)    
        )
    };

    console.log(frequencySort([2,3,1,3,2]))
}