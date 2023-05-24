{
    const maxScore = function(nums1, nums2, k) {
        let result = 0

        for(let i = 0; i < nums1.length; i++) {
            const arr = [...nums1,...nums1].slice(i,i + k )
            const arr1 = [...nums2, ...nums2].slice(i,i + k )

            const test = arr.reduce((curr,prev) => curr + prev, 0) * Math.min(...arr1)

            if(test > result) result = test
        }
    
    }

    const nums1 = [1,3,3,2] 
    const nums2 = [2,1,3,4]
    const k = 3

    console.log(maxScore(nums1, nums2, k))
}