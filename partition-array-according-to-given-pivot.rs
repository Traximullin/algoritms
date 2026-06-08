pub fn pivot_array(nums: Vec<i32>, pivot: i32) -> Vec<i32> {
    nums.iter()
        .copied()
        .filter(|&x| x < pivot)
        .chain(nums.iter().copied().filter(|&y| y == pivot))
        .chain(nums.iter().copied().filter(|&z| z > pivot))
        .collect()
}
