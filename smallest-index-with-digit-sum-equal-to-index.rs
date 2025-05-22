pub fn smallest_index(nums: Vec<i32>) -> i32 {
    fn digit_sum(mut n: i32) -> i32 {
        let mut sum = 0;
        while n > 0 {
            sum += n % 10;
            n /= 10;
        }
        sum
    }

    for (i, &num) in nums.iter().enumerate() {
        if i as i32 == digit_sum(num) {
            return i as i32;
        }
    }

    -1
}
