function divideArray(nums: number[], k: number): number[][] {
    const result: number[][] = [];
    
    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i += 3) {
        const sliced = nums.slice(i, i  + 3);

        if (sliced[2] - sliced[0] > k)
            return [];

        result.push(sliced);
    }

    return result;
};

console.log(divideArray([1,3,4,8,7,9,3,5,1], 2));
console.log(divideArray([2,4,2,2,5,2], 2));