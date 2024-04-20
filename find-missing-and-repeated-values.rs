use std::collections::HashSet;

pub fn find_missing_and_repeated_values(grid: Vec<Vec<i32>>) -> Vec<i32> {
    let mut set: HashSet<i32> = HashSet::new();

    let mut dup = 0;

    for nums in grid {
        for num in nums {
            if set.contains(&num) {
                dup = num;
            } else {
                set.insert(num);
            }
        }
    }

    for i in 1..=set.len() as i32 + 1 {
        if !set.contains(&i) {
            return vec![dup, i];
        }
    }

    return vec![];
}