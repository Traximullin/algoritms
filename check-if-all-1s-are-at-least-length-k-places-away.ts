{
    function kLengthApart(nums: number[], k: number): boolean {
        let lastOneIndex = -1;
        for (let i = 0 ; i < nums.length; i++) {
            if (nums[i] === 1) {
                if (lastOneIndex >= 0 && i - lastOneIndex - 1 < k) return false;
                lastOneIndex = i;
            }
        }
        return true;
    };   
}