function maxSubarrayLength(nums: number[], k: number): number {
    let left=0
    let right=0
    let length=0
    let maxLength=0
    let map = new Map()
   while(right<nums.length){
        map.set(nums[right],(map.get(nums[right])||0)+1)

        while(map.get(nums[right])>k){
            map.set(nums[left],map.get(nums[left])-1)
            left++
        }
        right++
        maxLength=Math.max(maxLength,right-left)

    }
    return maxLength
};
