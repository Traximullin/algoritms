pub fn string_hash(s: String, k: i32) -> String {
    let alphabet: Vec<char> = ('a'..='z').collect();
    let mut r = String::new();

    let k = k as usize;

    let chars: Vec<char> = s.chars().collect();

    for i in (0..chars.len()).step_by(k) {
        let end = std::cmp::min(i + k, chars.len());

        let chunk: Vec<char> = chars[i..end].to_vec();

        let sum: u32 = chunk.iter().map(|&c| c as u32 - 'a' as u32).sum();
        
        r.push(alphabet[(sum % 26) as usize]);
    }

    r
}