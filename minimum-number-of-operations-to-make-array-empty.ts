{
    function minOperations(nums: number[]): number {
        const counter = new Map();
        let ans = 0;
        
        for (const num of nums) {
            counter.set(num, (counter.get(num) || 0) + 1);
        }
        
        for(const count of counter.values()) {
            if(count == 1) {
                return -1;
            }
            ans += Math.ceil(count / 3)
        }


        return ans;
    };

    console.log(minOperations([2,3,3,2,2,4,2,3,4]))
}