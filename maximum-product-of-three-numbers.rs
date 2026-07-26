pub fn maximum_product(mut nums: Vec<i32>) -> i32 {
    nums.sort_unstable();
    nums[nums.len() - 3..]
        .iter()
        .product::<i32>()
        .max(nums.last().unwrap() * nums[0] * nums[1])
}
