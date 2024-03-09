{
    function getCommon(nums1: number[], nums2: number[]): number {
        let start = 0;
        let start_end = 0;
        
        while(nums1.length > start && nums2.length > start_end) {
            
            if(nums1[start] == nums2[start_end]) {
                return nums1[start]
            }

            if(nums1[start] < nums2[start_end]) {
                start++
            } else {
                start_end++
            }
            
        }

        return -1
    };  

    console.log(getCommon([3,5], [2]))

}