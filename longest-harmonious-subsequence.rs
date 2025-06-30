use std::collections::HashMap;

pub fn find_lhs(nums: Vec<i32>) -> i32 {
    let mut map = HashMap::new();
    let mut max = 0;

    for &num in &nums {
        *map.entry(num).or_insert(0) += 1;
    }

    for (&num, &count) in &map {
        if let Some(&next) = map.get(&(num + 1)) {
            max = max.max(count + next);
        }
    }

    max
}
