{
    function addedInteger(nums1: number[], nums2: number[]): number {
        return Math.min(...nums2) - Math.min(...nums1)
    };

    console.log(addedInteger([2,6,4], [9,7,5]))
}