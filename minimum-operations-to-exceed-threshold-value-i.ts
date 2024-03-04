{
    function minOperations(nums: number[], k: number): number {
        let c = 0;

        for(let num of nums) {
            if(num < k) {
                c++
            }
        }

        return c
    };

    console.log(minOperations([2,11,10,1,3], 10))
}