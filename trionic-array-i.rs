pub fn is_trionic(nums: Vec<i32>) -> bool {
    let mut result = 0;
    for idx in 1..nums.len() {
        if result == 0 {
            if nums[idx] <= nums[idx - 1] {
                return false;
            }
            if nums[idx] > nums[idx - 1] {
                result = 1;
            }
        } else if result == 1 {
            if nums[idx] == nums[idx - 1] {
                return false;
            }
            if nums[idx] < nums[idx - 1] {
                result = 2;
            }
        } else if result == 2 {
            if nums[idx] == nums[idx - 1] {
                return false;
            }
            if nums[idx] > nums[idx - 1] {
                result = 3;
            }
        } else if result == 3 {
            if nums[idx] <= nums[idx - 1] {
                return false;
            }
        }
    }
    result == 3
}
