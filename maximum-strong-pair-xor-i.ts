{
    function maximumStrongPairXor(nums: number[]): number {
        let max_xor = 0

        for (let i = 0; i < nums.length; i++) {

            for (let j = 0; j < nums.length; j++) {

                if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
                    const xor_candidate = nums[i] ^ nums[j]

                    max_xor = Math.max(max_xor, xor_candidate)
                }

            }

        }

        return max_xor
    };

    console.log(maximumStrongPairXor([1,2,3,4,5]))
}