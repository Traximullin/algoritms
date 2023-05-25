{
    const findMedianSortedArrays = function(nums1, nums2) {
        let result = nums1.concat(nums2).sort((a,b) => a - b)
        const median = Math.trunc(result.length / 2)

        if(result.length % 2 === 0) {
            return (result[median - 1] + result[median]) / 2
        } else {
            return result[median]
        }
    }
    
    const nums1 = [1,2], nums2 = [3,4]

    console.log(findMedianSortedArrays(nums1, nums2))
}