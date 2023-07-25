{
    // https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
    function peakIndexInMountainArray(arr: number[]): number {
        let left = 0,
            right = arr.length

        while(left < right) {
            const mid = Math.floor(left + (right - left) / 2)
            
            if (arr[mid] < arr[mid + 1])
                left = mid + 1
            else 
                right = mid
        }

        return left
    };

    console.log(peakIndexInMountainArray([0,2,1,0]))
}