pub fn can_be_typed_words(text: String, broken_letters: String) -> i32 {
    text.split_whitespace()
        .filter(|w| !broken_letters.chars().any(|c| w.contains(c)))
        .count() as _
}
