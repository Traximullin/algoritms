{
    function findPeakElement(nums: number[]): number {
        let start = 0,
            end = nums.length - 1;

        while (start < end) {
            const mid = ~~((start + end) / 2);

            if (nums[mid] > nums[mid + 1])
                end = mid;
            else 
                start = mid + 1;
        }

        return start;
    };

    console.log(findPeakElement([1,2,1,3,5,6,4]))
}