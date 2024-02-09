{
    function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
        const ans = [];
        const map = new Map();
        for(let i = 0; i < nums2.length; i++) {
            map.set(nums2[i], i);
        }
    
        for(let i = 0; i < nums1.length; i++) {
            let greatest = -1;
            const start = map.get(nums1[i]);
            for(let j = start + 1; j < nums2.length; j++) {
                if(nums2[j] > nums1[i]) {
                    greatest = nums2[j];
                    break;
                }
            }
    
           ans.push(greatest)
        }
    
        return ans;
    };
}