{
    // !TODO
    // Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
    // You must write an algorithm that runs in O(n) time.
    
    const longestConsecutive = function(nums: number[]) {
        const set = new Set(nums);
        let max_length = 0;

        for (const num of set) {

            if (set.has(num - 1))
                continue;

            let c = 0;

            while(set.has(num + c))
                c += 1;

            max_length = Math.max(c, max_length);

        }

        return max_length;
    };

    console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
    console.log(longestConsecutive([100,4,200,1,3,2]))
}