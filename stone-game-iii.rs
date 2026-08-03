pub fn stone_game_iii(s: Vec<i32>) -> String {
    match solve(&s, &mut vec![i32::MIN; s.len()], 0) {
        score if score > 0 => "Alice".to_string(),
        score if score < 0 => "Bob".to_string(),
        _ => "Tie".to_string(),
    }
}

fn solve(s: &[i32], memo: &mut [i32], idx: usize) -> i32 {
    if s.len() <= 1 {
        return *s.get(0).unwrap_or(&0);
    }
    if memo[idx] > i32::MIN {
        return memo[idx];
    }

    let one = s[0] - solve(&s[1..], memo, idx + 1);
    let two = s[0] + s[1] - solve(&s[2..], memo, idx + 2);

    let three = match s.len() {
        2 => i32::MIN,
        _ => s.iter().take(3).sum::<i32>() - solve(&s[3..], memo, idx + 3),
    };

    memo[idx] = one.max(two).max(three);
    memo[idx]
}
