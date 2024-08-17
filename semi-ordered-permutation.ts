{
    function semiOrderedPermutation(nums: number[]): number {
        const first = nums.indexOf(1),
              last = nums.indexOf(nums.length),
              minus = Number(last < first);
    
        return first + (nums.length - 1 - last) - minus
    };


    console.log(semiOrderedPermutation([2,1,4,3]))
}