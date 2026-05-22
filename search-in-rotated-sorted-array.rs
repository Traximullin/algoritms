pub fn search(n: Vec<i32>, t: i32) -> i32 {
    let (s, b) = (n.partition_point(|&x| x >= n[0]), (t < n[0]) as usize);
    [&n[..s], &n[s..]][b]
        .binary_search(&t)
        .map_or(-1, |i| (i + s * b) as _)
}
