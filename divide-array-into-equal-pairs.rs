use std::collections::HashSet;

pub fn divide_array(nums: Vec<i32>) -> bool {
    let mut set = HashSet::new();

    for num in nums {
        if !set.contains(&num) {
            set.insert(num);
        } else {
            set.remove(&num);
        }
    }

    return set.len() == 0;
}
