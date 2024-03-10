{
    function countPairs(nums: number[], k: number): number {
        let c = 0;

        for(let i = 0; i < nums.length; i++) {

            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] === nums[j] && i * j % k === 0) {
                    c++
                }
            }

        }

        return c
    };

    console.log(countPairs([3,1,2,2,2,1,3], 2))
    console.log(countPairs([5,5,9,2,5,5,9,2,2,5,5,6,2,2,5,2,5,4,3], 7))
}