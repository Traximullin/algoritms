pub fn largest_good_integer(num: String) -> String {
    match num
        .as_bytes()
        .chunk_by(u8::eq)
        .filter(|xs| xs.len() >= 3)
        .max()
    {
        Some(xs) => [xs[0] as char; 3].iter().collect(),
        _ => "".into(),
    }
}
