pub fn minimum_cost(mut nums: Vec<i32>) -> i32 {
    let mut result = nums.remove(0);
    nums.sort();
    result + nums[0] + nums[1]
}
