pub fn possible_string_count(word: String) -> i32 {
    let mut c = 1;
    let chars: Vec<char> = word.chars().collect();

    for i in 1..chars.len() {
        if chars[i - 1] == chars[i] {
            c += 1;
        }
    }

    c
}
