pub fn reverse_parentheses(s: String) -> String {
    let (mut stack, mut result) = (vec![], vec![]);
    s.chars().for_each(|ch| {
        if ch == '(' {
            stack.push(result.clone());
            result = vec![];
        } else if ch == ')' {
            result.reverse();
            if let Some(mut prev) = stack.pop() {
                prev.append(&mut result);
                result = prev;
            }
        } else {
            result.push(ch);
        }
    });
    result
        .iter()
        .map(|ch| ch.to_string())
        .collect::<Vec<String>>()
        .join("")
}
