pub fn total_money(n: i32) -> i32 {
    (0..n).map(|d| d / 7 + d % 7 + 1).sum()
}
