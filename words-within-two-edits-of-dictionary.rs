fn can_edit(u: &str, v: &str) -> bool {
    if u.len() != v.len() {
        return false;
    }
    let mut d = 0;
    for (s, t) in u.chars().zip(v.chars()) {
        if s == t {
            continue;
        }
        d += 1;
        if d > 2 {
            return false;
        }
    }
    true
}

pub fn two_edit_words(queries: Vec<String>, dictionary: Vec<String>) -> Vec<String> {
    queries
        .into_iter()
        .filter(|w| dictionary.iter().any(|d| can_edit(w, d)))
        .collect()
}
