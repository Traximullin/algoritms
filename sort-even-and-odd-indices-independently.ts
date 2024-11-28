function sortEvenOdd(nums: number[]): number[] {
    if (nums.length <= 2) {
        return nums
    }

    const even: number[] = [];
    const odd: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0)
            even.push(nums[i]);
        else 
            odd.push(nums[i])
    }

    even.sort((a,b) => b - a);
    odd.sort((a,b) => a - b );

    return nums.reduce<number[]>((array, _, index) => {
        array[index] = index % 2 === 0 ? even.pop() || 0 : odd.pop() || 0;
        return array;
    }, [])
};

console.log(sortEvenOdd([4,1,2,3]))
