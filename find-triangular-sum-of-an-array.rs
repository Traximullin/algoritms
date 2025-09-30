pub fn triangular_sum(mut nums: Vec<i32>) -> i32 {
    for size in (1..nums.len()).rev() {
        for i in 0..size {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
    }
    return nums[0];
}
