pub fn sort_vowels(s: String) -> String {
    let vowels = "aeiou".as_bytes();
    let mut s = s.into_bytes();

    let (idx, mut chr): (Vec<_>, Vec<_>) = s
        .iter()
        .enumerate()
        .filter(|&(_, c)| vowels.contains(&c.to_ascii_lowercase()))
        .unzip();

    chr.sort_unstable();

    idx.into_iter()
        .zip(chr.into_iter())
        .for_each(|(i, c)| s[i] = c);

    String::from_utf8(s).unwrap()
}
