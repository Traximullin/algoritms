pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
    let rows = matrix.len();
    if rows == 0 {
        return;
    }
    let cols = matrix[0].len();

    let mut row = vec![false; rows];
    let mut col = vec![false; cols];

    for i in 0..rows {
        for j in 0..cols {
            if matrix[i][j] == 0 {
                row[i] = true;
                col[j] = true;
            }
        }
    }

    for i in 0..rows {
        for j in 0..cols {
            if row[i] || col[j] {
                matrix[i][j] = 0;
            }
        }
    }
}
