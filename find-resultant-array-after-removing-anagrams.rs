pub fn remove_anagrams(mut words: Vec<String>) -> Vec<String> {
    words.dedup_by_key(|k| {
        k.bytes().fold([0; 26], |mut f, b| {
            f[(b - b'a') as usize] += 1;
            f
        })
    });

    words
}
