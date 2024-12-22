{
    function distinctAverages(nums: number[]): number {
        const set = new Set();

        nums.sort((a,b) => a - b);

        let start = 0,
            end = nums.length - 1;

        while(start <= end) {
            const res = (nums[start] + nums[end]) / 2
            set.add(res);

            start +=1;
            end -= 1;
        }

        return set.size;
    };


    console.log(distinctAverages([4,1,4,0,3,5]))
}