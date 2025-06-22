pub fn divide_string(s: String, k: i32, fill: char) -> Vec<String> {
    let mut s = s.chars().collect::<Vec<_>>();
    let k = k as usize;
    s.resize((1 + (s.len() - 1) / k) * k, fill);
    s.chunks(k).map(|c| c.iter().collect()).collect()
}
