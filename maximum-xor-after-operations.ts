{
    function maximumXOR(nums: number[]): number {
        return nums.reduce((a, b) => a |= b, 0);
    };
}