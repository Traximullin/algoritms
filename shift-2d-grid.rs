pub fn shift_grid(grid: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    let row = grid.len();
    let col = grid[0].len();
    let len = col * row;

    let v = grid.concat();

    let k = (k as usize) % len;
    let ret = v
        .repeat(2)
        .into_iter()
        .skip(len - k)
        .take(len)
        .collect::<Vec<_>>();

    ret.chunks(col).map(|n| n.to_vec()).collect()
}
