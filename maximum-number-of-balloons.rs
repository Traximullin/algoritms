pub fn max_number_of_balloons(t: String) -> i32 {
    "balon"
        .chars()
        .map(|c| t.matches(c).count() / ((c == 'l' || c == 'o') as usize + 1))
        .min()
        .unwrap() as _
}
