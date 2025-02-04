use std::cmp;

pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
    let mut c = nums[0];
    let mut r = 0;

    for i in 1..nums.len() {
        if (nums[i] > nums[i - 1]) {
            c += nums[i];
        } else {
            r = cmp::max(c, r);
            c = nums[i];
        }
    }

    cmp::max(c, r)
}