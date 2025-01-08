pub fn count_prefix_suffix_pairs(words: Vec<String>) -> i32 {
    let mut c = 0;

    for i in 0..words.len() - 1 {
        let first_word = &words[i];

        for j in i + 1..words.len() {
            let second_word = &words[j];

            if second_word.starts_with(first_word) && second_word.ends_with(first_word) {
                c += 1;
            }
        }

    }

    return c;
}