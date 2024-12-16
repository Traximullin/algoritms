pub fn get_final_state(mut nums: Vec<i32>, mut k: i32, multiplier: i32) -> Vec<i32> {
    while k != 0 {
        let mut index_min = 0;
        let mut min = nums[index_min];

        for i in 1..nums.len() {
            if nums[i] < min {
                index_min = i;
                min = nums[i];
            }
        }
        nums[index_min] *= multiplier;
        
        k -= 1;
    }

    nums
}