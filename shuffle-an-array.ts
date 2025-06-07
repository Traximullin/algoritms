{
    class Solution {
        arr: number[];

        constructor(nums: number[]) {
            this.arr = nums;        
        }

        reset(): number[] {
            return this.arr;    
        }

        shuffle(): number[] {
            const nums = this.arr.slice();

            for (let i = 0, j = nums.length; i < j; i++)
                if (Math.random() > 0.5)
                    [nums[0], nums[i]] = [nums[i], nums[0]]

            return nums
        }
    }
}