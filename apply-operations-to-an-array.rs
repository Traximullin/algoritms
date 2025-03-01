{
    pub fn apply_operations(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        let mut res = Vec::new();
        let mut zeros = Vec::new();

        let len = nums.len();
        for i in 0..len {
            if i < len - 1 && nums[i] == nums[i + 1] {
                nums[i] *= 2;
                nums[i + 1] = 0;
            }

            if nums[i] == 0 {
                zeros.push(0);
            } else {
                res.push(nums[i]);
            }
        }

        res.extend(zeros);
        res
    }
}