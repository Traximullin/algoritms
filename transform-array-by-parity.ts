{
    function transformArray(nums: number[]): number[] {
        nums = nums.map(num => num % 2 == 0 ? 0 : 1)

        return nums.sort();
    };  

    console.log(transformArray([1,5,1,4,2]))
}