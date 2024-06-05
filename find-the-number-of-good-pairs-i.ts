{
    function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
        let c = 0
        
        for (let i = 0; i < nums1.length; i++) {
            const num_1 = nums1[i]
            for (let j = 0; j < nums2.length; j++) {
                const num_2 = nums2[j] * k

                if (num_1 % num_2 === 0) 
                    c++
          
            }

        }

        return c
    }

    console.log(numberOfPairs([1,3,4], [1,3,4], 1))
}