{
    function getMinDistance(nums: number[], target: number, start: number): number {
        let left_start, right_start;
        right_start = left_start = start;

        while (true) {

            if (nums[right_start] == target)
                return right_start - start
            
            if (nums[left_start] == target)
                return start - left_start;

            left_start -= 1;
            right_start += 1;

        }

    };

    // console.log(getMinDistance([1,2,3,4,5],5 ,3))
    console.log(getMinDistance([1,1,1,1,1,1,1,1,1,1], 9, 1))
}