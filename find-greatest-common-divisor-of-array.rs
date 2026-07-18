pub fn find_gcd(nums: Vec<i32>) -> i32 {
    let (mut min, mut max) = nums
        .into_iter()
        .fold((i32::MAX, i32::MIN), |(min, max), num| {
            (min.min(num), max.max(num))
        });

    while min.is_positive() {
        min = std::mem::replace(&mut max, min) % min;
    }
    max
}
