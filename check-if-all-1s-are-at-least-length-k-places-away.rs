pub fn k_length_apart(nums: Vec<i32>, k: i32) -> bool {
    let mut start: i32 = -1;
    let mut end: i32 = -1;

    for i in 0..nums.len() {

        let num = nums[i];

        if num == 1 {
            end = start;
            start = i as i32;

            if end != -1 && start - end - 1 < k {
                return false;
            }
        }

    }
    return true;
}