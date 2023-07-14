{
    const intersection = function(nums1, nums2) {
        const result: number[] = []

        nums1.forEach(item => nums2.includes(item) && result.push(item))

        return [...new Set(result)]
    };

    console.log(intersection([1,2,2,1], [2,2]))
}