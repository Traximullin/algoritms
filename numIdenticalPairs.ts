{
    const numIdenticalPairs = function(nums) {
        let pair = 0

        const map = {}

        for(let num of nums) {
            if(map[num]) {
                pair += map[num]
                map[num]++
            } else {
                map[num] = 1
            }
        }

        return pair
    };

    console.log(numIdenticalPairs([1,2,3,1,1,3]))
}