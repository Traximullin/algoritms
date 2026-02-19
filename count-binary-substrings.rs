pub fn count_binary_substrings(s: String) -> i32 {
    let mut lk = 0;
    let mut rk = 1;
    let mut ans = 0;
    for (a, b) in s.chars().zip(s.chars().skip(1)) {
        if a != b {
            ans += lk.min(rk);
            lk = rk;
            rk = 0;
        }
        rk += 1;
    }
    ans += lk.min(rk);
    ans
}
