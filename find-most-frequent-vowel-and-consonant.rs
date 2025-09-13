pub fn max_freq_sum(s: String) -> i32 {
    let mut cnt = [0; 26];
    let mut max = [0; 2];
    for c in s.bytes() {
        let cnt = &mut cnt[(c - b'a') as usize];
        *cnt += 1;
        let ma = &mut max[b"aeoiu".contains(&c) as usize];
        *ma = (*cnt).max(*ma);
    }
    max[0] + max[1]
}
