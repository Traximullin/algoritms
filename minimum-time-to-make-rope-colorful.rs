pub fn min_cost(colors: String, needed_time: Vec<i32>) -> i32 {
    let (mut result, mut p, mut m, mut s) = (0, 0, 0, 0);
    for (c, t) in colors.into_bytes().into_iter().zip(needed_time) {
        if c == p {
            m = m.max(t);
            s += t;
        } else {
            result += s - m;
            m = t;
            s = t;
            p = c;
        }
    }
    result + s - m
}
