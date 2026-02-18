pub fn has_alternating_bits(mut n: i32) -> bool {
    let mut prev = -1;
    while n > 0 {
        if prev == n % 2 {
            return false;
        }
        prev = n % 2;
        n /= 2;
    }
    true
}
