{
    // TODO решить по умному
    function rearrangeArray(nums: number[]): number[] {
        const nums_one = nums.filter(num => num >= 0)
        const nums_two = nums.filter(num => num < 0)
    
        const r: number[] = [];

        for(let i = 0; i < nums.length / 2; i++) {
            r.push(nums_one[i])
            r.push(nums_two[i])
        }

        return r
    };

    console.log(rearrangeArray([3,1,-2,-5,2,-4]))
}