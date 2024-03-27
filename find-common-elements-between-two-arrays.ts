{
    function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
        const result: number[] = [0, 0];
        let uniq_intersection = new Set(nums2)

        nums1.forEach(num => {
            if (uniq_intersection.has(num)) 
                result[0] += 1
        })


        uniq_intersection = new Set(nums1)

        nums2.forEach(num => {
            if (uniq_intersection.has(num)) 
                result[1] += 1
        })

        return result
    };

    console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6]))
}