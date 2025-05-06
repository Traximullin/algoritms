pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
    let mut arr = vec![0; nums.len()];

    for (i, _) in nums.iter().enumerate() {
        arr[i] = nums[nums[i] as usize];
    }

    arr
}
