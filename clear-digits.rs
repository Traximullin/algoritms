pub fn clear_digits(s: String) -> String {
    let mut chars = vec![];

    for char in s.chars() {
        if char.is_numeric() {
            chars.pop();
        } else {
            chars.push(char);
        }
    }

    return chars.iter().collect();
}