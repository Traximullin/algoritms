pub fn minimum_difference(mut nums: Vec<i32>, k: i32) -> i32 {
    nums.sort_unstable();
    nums.windows(k as usize)
        .map(|pair| pair[(k - 1) as usize] - pair[0])
        .min()
        .unwrap()
}
