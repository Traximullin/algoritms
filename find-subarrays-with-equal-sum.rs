use std::collections::HashSet;

pub fn find_subarrays(nums: Vec<i32>) -> bool {
    let mut hash = HashSet::new();

    for i in 1..nums.len() {
        let sum = nums[i] + nums[i - 1];

        if hash.contains(&sum) {
            return true
        } else {
            hash.insert(sum);
        }
    }

    false
}