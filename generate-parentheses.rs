pub fn generate_parenthesis(n: i32) -> Vec<String> {
    let mut path = String::new();
    let mut res = Vec::new();

    Self::dfs(0, 0, &mut path, &mut res, n);

    res
}

fn dfs(open_count: i32, close_count: i32, path: &mut String, res: &mut Vec<String>, n: i32) {
    if open_count == n && close_count == n {
        res.push(path.clone());
        return;
    }

    if open_count < n {
        path.push('(');https://leetcode.com/problems/generate-parentheses/
        Self::dfs(open_count + 1, close_count, path, res, n);
        path.pop();
    }

    if close_count < open_count {
        path.push(')');
        Self::dfs(open_count, close_count + 1, path, res, n);
        path.pop();
    }
}
