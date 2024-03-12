{
    function numberOfPairs(nums: number[]): number[] {
        const hash = new Set();

        loop: for(let i = 0; i < nums.length; i++) {

            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] === nums[j] && !hash.has(j) && !hash.has(i)) {
                    hash.add(j)
                    hash.add(i)
                    continue loop;
                }
            }

        }

        return [hash.size / 2,nums.length - hash.size]
    };

    console.log(numberOfPairs([1,3,2,1,3,2,2]
        ))


}