{
    const getNum = (nums: number[]) => {
        return Math.min(...nums).toString();
    }
    
    function minNumber(nums1: number[], nums2: number[]): number {
        const set_1 = new Set(nums1);
        let min = Infinity;
    
        for (const num of nums2) {
            if (set_1.has(num) && min > num)
                min = num
        }
    
        if (min !== Infinity) 
            return min
    
        const nums_1 = getNum(nums1) + getNum(nums2);
        const nums_2 = getNum(nums2) + getNum(nums1);
    
        return nums_1 > nums_2 ? parseInt(nums_2) : parseInt(nums_1)
    };

    console.log(minNumber([3,5,2,6], [3,1,7]))
    console.log(minNumber([6,4,3,7,2,1,8,5], [6,8,5,3,1,7,4,2]    ))
}