pub fn subset_xor_sum(nums: Vec<i32>) -> i32 {
    nums.iter().fold(0, |agg, &x| agg | x) << (nums.len() - 1)
}
