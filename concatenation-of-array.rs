impl Solution {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        let mut result: Vec<i32> = vec![0; 2 * nums.len()];

        for i in 0..nums.len() {
            result[i + nums.len()] = nums[i];
            result[i] = nums[i];
        }

        result
    }
}