pub fn has_same_digits(s: String) -> bool {
    let s: Vec<u32> = s
        .chars()
        .map(|c| c.to_digit(10).unwrap())
        .collect::<Vec<_>>();

    let digits = (0..(s.len() - 2)).into_iter().fold(s, |acc, _| {
        acc.windows(2)
            .into_iter()
            .map(|window| (window[0] + window[1]) % 10)
            .collect::<Vec<_>>()
    });

    digits[0] == digits[1]
}
