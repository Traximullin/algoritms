{

    const helper = (nums, hash) => {

        for (const num of new Set(nums)) {
            const new_value = (hash.get(num) || 0) + 1;

            hash.set(num, new_value)
        }

    }

    function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
        const hash = new Map();

        helper(nums1, hash)
        helper(nums2, hash)
        helper(nums3, hash)

        const result = [];

        hash.forEach((item, key) => {
            if (item >= 2) {
                result.push(key)
            }
        })

        return result
    };

    console.log(twoOutOfThree([3,1],[2,3],[1,2]))
}