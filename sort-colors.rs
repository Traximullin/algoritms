pub fn sort_colors(nums: &mut Vec<i32>) {
    let mut dp = vec![0; 3];

    for &num in nums.iter() {
        dp[num as usize] += 1;
    }

    let mut index = 0;

    for color in 0..3 {
        for _ in 0..dp[color] {
            nums[index] = color as i32;
            index += 1;
        }
    }
}
