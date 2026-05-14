pub fn is_good(mut n: Vec<i32>) -> bool {
    (0..n.len()).all(|i| {
        let x = n[i].abs() as usize;
        !(x >= n.len() || n[x] < 0 && (x < n.len() - 1 || n[0] < 0)) && {
            if n[x] < 0 {
                n[0] *= -1
            } else {
                n[x] *= -1
            };
            1 > 0
        }
    }) && n[0] < 0
}
