pub fn check(n: Vec<i32>) -> bool {
    n.repeat(2).windows(n.len()).any(|w| w.is_sorted())
}
