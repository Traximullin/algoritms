pub fn prefix_count(words: Vec<String>, pref: String) -> i32 {
    let mut c = 0;

    for word in words {
        if word.starts_with(&pref) {
            c += 1;
        }
    }

    c
}