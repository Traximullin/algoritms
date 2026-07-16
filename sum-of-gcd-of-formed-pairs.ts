function gcdSum(nums: number[]): number {
    const gcdArray = Array.from({length: nums.length}, () => 0);

    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        max = Math.max(max, num);

        gcdArray[i] = getGCD(num, max);
    }


    gcdArray.sort((a, b) => a - b);

    let sum = 0;
    let leftIndex = 0;
    let rightIndex = gcdArray.length - 1;
    while (leftIndex < rightIndex) {
        sum += getGCD(gcdArray[leftIndex++], gcdArray[rightIndex--]);
    }

    return sum;
};

function getGCD(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
