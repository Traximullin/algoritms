pub fn count_symmetric_integers(low: i32, high: i32) -> i32 {
    let mut count = 0;

    for num in low..=high {
        let s = num.to_string();
        let len = s.len();

        if len % 2 == 0 {
            let half = len / 2;
            let first_half = s[..half]
                .chars()
                .map(|c| c.to_digit(10).unwrap() as i32)
                .sum();
            let second_half = s[half..]
                .chars()
                .map(|c| c.to_digit(10).unwrap() as i32)
                .sum();

            if first_half == second_half {
                count += 1;
            }
        }
    }

    count
}
