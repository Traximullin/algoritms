pub fn max_score(s: String) -> i32 {
    let mut left = 0;
    let mut right = s.chars().filter(|&x| x == '1').count() as i32;
    let mut max = 0;

    for i in 0..s.len() - 1 {
        if s.chars().nth(i).unwrap() == '0' {
            left += 1;
        } else {
            right -= 1;
        }
        max = max.max(left + right);
    }

    return max;
}