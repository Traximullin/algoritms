pub fn is_balanced(num: String) -> bool {
    let digits: Vec<i32> = num
        .chars()
        .filter_map(|c| c.to_digit(10))
        .map(|d| d as i32)
        .collect();

    let (even, odd) = digits.into_iter().enumerate().fold((0, 0), |(even_sum, odd_sum), (i, value)| {
        if i % 2 == 0 {
            (even_sum + value, odd_sum)
        } else {
            (even_sum, odd_sum + value)
        }
    });

    
    return even == odd;
}