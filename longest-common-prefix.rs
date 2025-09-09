pub fn longest_common_prefix(strs: Vec<String>) -> String {
    let mut output = strs[0].clone();
    for s in strs.iter() {
        while !s.starts_with(&output) {
            output.pop();
        }
    }
    output.to_string()
}
