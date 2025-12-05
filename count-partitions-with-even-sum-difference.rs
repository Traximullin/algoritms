pub fn count_partitions(nums: Vec<i32>) -> i32 {
    (nums.iter().sum::<i32>() & 1 ^ 1) * (nums.len() as i32 - 1)
}
