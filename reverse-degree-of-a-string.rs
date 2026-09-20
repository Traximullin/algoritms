pub fn reverse_degree(s: String) -> i32 {
    s.bytes()
        .enumerate()
        .map(|(i, b)| {
            let reversed_alphabet_pos = 26 - (b - b'a') as i32;

            let string_pos = (i + 1) as i32;

            reversed_alphabet_pos * string_pos
        })
        .sum()
}
