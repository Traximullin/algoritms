{
    function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
        const hash = new Map();

        for (const nums of nums1) {
            const [key, value] = nums;

            const new_value = (hash.get(key) || 0) + value;

            hash.set(key, new_value);
        }

        for (const nums of nums2) {
            const [key, value] = nums;

            const new_value = (hash.get(key) || 0) + value;

            hash.set(key, new_value);
        }

        return [...hash.entries()].sort((a, b) => a[0] - b[0])
    };

    console.log(mergeArrays([[1,2],[2,3],[4,5]],[[1,4],[3,2],[4,1]]))
}