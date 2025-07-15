use std::collections::HashSet;

pub fn is_valid(word: String) -> bool {
    if word.len() < 3 {
        return false;
    }

    let consonant: HashSet<char> = "bcdfghjklmnpqrstvwxyz".chars().collect();
    let vowels: HashSet<char> = "aeiou".chars().collect();
    let nums: HashSet<char> = "1234567890".chars().collect();

    let mut is_vowel = false;
    let mut is_consonant = false;

    for c in word.to_lowercase().chars() {
        if !consonant.contains(&c) && !vowels.contains(&c) && !nums.contains(&c) {
            return false;
        }

        if vowels.contains(&c) {
            is_vowel = true;
        }

        if consonant.contains(&c) {
            is_consonant = true;
        }
    }

    is_vowel && is_consonant
}
