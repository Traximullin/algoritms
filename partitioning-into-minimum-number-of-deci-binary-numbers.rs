pub fn min_partitions(n: String) -> i32 {
    i32::from(n.bytes().max().unwrap() - b'0')
}
