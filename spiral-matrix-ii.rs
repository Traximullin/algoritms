pub fn generate_matrix(n: i32) -> Vec<Vec<i32>> {
    let n = n as usize;
    let mut ans = vec![vec![1; n]; n];
    let mut i = 0usize;
    let mut j = 0usize;
    let dir = [0, 1, 0, usize::MAX, 0];
    let mut d = 0;
    let iter = std::iter::once(n * 2 - 1).chain((2..n * 2).rev());

    for x in iter {
        for _ in 0..x / 2 {
            let i2 = i.wrapping_add(dir[d]);
            let j2 = j.wrapping_add(dir[d + 1]);
            ans[i2][j2] = ans[i][j] + 1;
            i = i2;
            j = j2;
        }
        d = (d + 1) & 3;
    }
    ans
}
