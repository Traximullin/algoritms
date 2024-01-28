{
    class NumArray {
        private nums: number[];

        constructor(nums: number[]) {
            this.nums = nums;
        }

        sumRange(left: number, right: number): number {
            let count = 0;

            for(let i = left; i <= right; i++) {
                count += this.nums[i];    
            }

            return count
        }
    }

    const test = new NumArray([-2, 0, 3, -5, 2, -1])
    console.log(test.sumRange(2,5))
    console.log(test.sumRange(0,5))
}