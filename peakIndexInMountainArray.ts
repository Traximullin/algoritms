{
    // https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
    function peakIndexInMountainArray(arr: number[]): number {
        let left = 0,
            right = arr.length,
            mid = 0

        while(left < right) {
            mid = (left + right) / 2
            if(arr[mid] < arr[mid] + arr[mid + 1]) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return left
    };

    console.log(peakIndexInMountainArray([0,1,0]))
}