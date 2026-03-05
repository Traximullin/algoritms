pub fn min_operations(s: String) -> i32 {
    let t = s
        .bytes()
        .enumerate()
        .filter(|&(i, c)| (i & 1) as u8 == c - b'0')
        .count() as i32;
    t.min(s.len() as i32 - t)
}
