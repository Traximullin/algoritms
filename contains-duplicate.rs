use std::collections::HashSet;

pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    let set: HashSet<_> = nums.iter().collect();

    set.len() < nums.len()
}
