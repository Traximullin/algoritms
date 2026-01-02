pub fn repeated_n_times(nums: Vec<i32>) -> i32 {
    for i in 1..nums.len() {
        if nums[i] == nums[i - 1] {
            return nums[i];
        }
    }

    if nums[1] == nums[3] {
        nums[1]
    } else {
        nums[0]
    }
}
