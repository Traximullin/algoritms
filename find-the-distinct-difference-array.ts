function distinctDifferenceArray(nums: number[]): number[] {
    const left_set = new Set();

    return nums.map((num,i)=>{
        left_set.add(num);

        const right_set = new Set(
            nums.slice(i + 1)
        );
        
        return left_set.size - right_set.size;
    })
};

console.log(distinctDifferenceArray([1,2,3,4,5]))