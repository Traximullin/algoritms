pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let length = nums.len();

    for first_num in 1..length {
        for second_num in first_num..length {
            let left_side = second_num - first_num;
            let right_side = second_num;
            if nums[left_side] + nums[right_side] == target {
                return vec![left_side as i32, right_side as i32];
            }
        }
    }
    vec![]
}
