pub fn find_final_value(mut nums: Vec<i32>, mut original: i32) -> i32 {
    let n = nums.len();
    nums.sort();

    for i in 0..n {
        if nums[i] > original {
            return original;
        }

        if nums[i] == original {
            original *= 2;
        }
    }

    return original;
}
