pub fn max_distance(colors: Vec<i32>) -> i32 {
    let mut result = 0;
    for idx in 0..colors.len() {
        for idx2 in idx + 1..colors.len() {
            if colors[idx] != colors[idx2] {
                result = result.max((idx as i32 - idx2 as i32).abs())
            }
        }
    }
    result
}
