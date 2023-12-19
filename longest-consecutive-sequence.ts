{
    // !TODO
    // Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
    // You must write an algorithm that runs in O(n) time.
    
    const longestConsecutive = function(nums) {
        console.log(nums)
        let count = 0;
        let prev = 0;
        let length = nums.length;
        let prevNumber;
        let min;

        for(let i = 0;i < length; i++) {
            min = Math.min(...nums)

            if(!prevNumber) {
                prevNumber = min
                nums.splice(nums.indexOf(min), 1)
                count += 1
            }

            if(prevNumber + 1 === min) {
                console.log(min)
                prevNumber = min
                nums.splice(nums.indexOf(prevNumber),1)
                count += 1
            }


        }
        return count
    };

    console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
}