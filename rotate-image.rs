pub fn rotate(matrix: &mut Vec<Vec<i32>>) {
    matrix.reverse();
    for i in 1..matrix.len() {
        for j in 0..i {
            let (r1, r2) = matrix.split_at_mut(i);
            std::mem::swap(&mut r1[j][i], &mut r2[0][j]);
        }
    }
}
