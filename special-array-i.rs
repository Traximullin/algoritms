pub fn is_array_special(nums: Vec<i32>) -> bool {
    for i in 1..nums.len() {
        let parity_1 = nums[i] % 2;
        let parity_2 = nums[i - 1] % 2;

        if parity_1 == parity_2 {
            return false;
        }
    }

    return true;
}