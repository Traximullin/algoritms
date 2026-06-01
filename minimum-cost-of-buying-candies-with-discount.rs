pub fn minimum_cost(mut a: Vec<i32>) -> i32 {
    a.sort();
    a.rchunks(3).flat_map(|c| &c[c.len() / 3..]).sum()
}
