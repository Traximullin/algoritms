pub fn min_pair_sum(mut nums: Vec<i32>) -> i32 {
    nums.sort_unstable();
    nums[nums.len() >> 1..]
        .iter()
        .zip(nums[..nums.len() >> 1].iter().rev())
        .fold(0, |m, (l, r)| m.max(l + r))
}
