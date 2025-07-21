pub fn make_fancy_string(s: String) -> String {
    let chars: Vec<char> = s.chars().collect();
    let mut result = String::new();

    if chars.len() < 3 {
        return s.to_string();
    }

    result.push(chars[0]);

    for i in 1..chars.len() {
        if i >= 2 && chars[i] == chars[i - 1] && chars[i] == chars[i - 2] {
            continue;
        }
        result.push(chars[i]);
    }

    result
}
