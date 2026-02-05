pub fn construct_transformed_array(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut res = vec![0; n];

    for i in 0..n {
        res[i] = nums[((i as i32 + nums[i]) % (n as i32) + (n as i32)) as usize % n];
    }
    return res;
}
