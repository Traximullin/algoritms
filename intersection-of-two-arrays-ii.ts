{
    function intersect(nums1: number[], nums2: number[]): number[] {
        const [bigArray, minArray] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1]
        
        const hash = new Map();
        const result = [];
        
        for(let i = 0; i < minArray.length; i++) {
            hash.set(minArray[i], (hash.get(minArray[i]) || 0) + 1)
        }

        for(let i = 0; i < bigArray.length; i++) {
            if(hash.get(bigArray[i]) > 0) {
                hash.set(bigArray[i], hash.get(bigArray[i]) - 1)
                result.push(bigArray[i])
            }
        }
        return result
    };

    console.log(intersect([1,2,2,1], [2,2]))
}