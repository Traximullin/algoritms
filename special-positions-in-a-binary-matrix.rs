pub fn num_special(mat: Vec<Vec<i32>>) -> i32 {
    let m = mat.len();
    let n = mat[0].len();
    let mut count = 0;

    for i in 0..m {
        for j in 0..n {
            if mat[i][j] == 1 {
                let row_sum: i32 = mat[i].iter().sum();
                let col_sum: i32 = (0..m).map(|r| mat[r][j]).sum();
                if row_sum == 1 && col_sum == 1 {
                    count += 1;
                }
            }
        }
    }

    count
}
