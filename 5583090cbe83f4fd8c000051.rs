fn digitize(n: u64) -> Vec<u8> {
    n
        .to_string()
        .chars()
        .map(|digit| digit.to_digit(10).unwrap() as u8)
        .rev()
        .collect()
}