use std::collections::HashSet;

pub fn get_sneaky_numbers(nums: Vec<i32>) -> Vec<i32> {
    let mut r: Vec<i32> = Vec::new();
    let mut hash: HashSet<i32> = HashSet::new();

    for num in nums {
        if hash.contains(&num) {
            r.push(num);
        } else {
            hash.insert(num);
        }
    }

    return r;
}