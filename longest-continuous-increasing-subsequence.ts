function findLengthOfLCIS(nums: number[]): number {
    let max_len = 1;
    let cur_len = 1;
    for(let num = 0; num<nums.length-1; num++){
        if(nums[num] < nums[num+1]){
            cur_len++ ;
        }else{
            cur_len = 1;
        }
        max_len = Math.max(max_len,cur_len)
    }
    return max_len
};