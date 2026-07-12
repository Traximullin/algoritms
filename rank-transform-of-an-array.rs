pub fn array_rank_transform(mut arr: Vec<i32>) -> Vec<i32> {
    let mut rk = arr.clone();
    rk.sort_unstable();
    rk.dedup();
    for n in &mut arr {
        *n = rk.partition_point(|&x| x < *n) as i32 + 1;
    }
    arr
}
