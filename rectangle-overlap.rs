pub fn is_rectangle_overlap(a: Vec<i32>, b: Vec<i32>) -> bool {
    (0..2).all(|i| a[i] < b[i + 2] && b[i] < a[i + 2])
}
