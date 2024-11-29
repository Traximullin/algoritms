{
    // !TODO
    // Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
    // You must write an algorithm that runs in O(n) time.
    
    const longestConsecutive = function(nums) {
        let c = 0;
        const set = new Set();

        function check(num: number) {
            console.log(num)
            if (set.has(num - 1)) {
                c += 1; 
                check (num - 1);
            }
        }

        for (let i = 0; i < nums.length; i++) {
            set.add(nums[i])

            check(nums[i])
        }

        console.log(c)
    };

    // console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
    console.log(longestConsecutive([100,4,200,1,3,2]))
}