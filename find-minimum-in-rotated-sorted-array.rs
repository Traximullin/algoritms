pub fn find_min(n: Vec<i32>) -> i32 {
    n[n.partition_point(|&x|x>n[n.len()-1])]
}
