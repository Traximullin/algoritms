pub fn lexical_order(n: i32) -> Vec<i32> {
    (0..n)
        .scan(0, |x, t| {
            if *x > 0 && *x * 10 <= n {
                *x *= 10
            } else {
                if *x == n {
                    *x /= 10
                }
                *x += 1;
                while *x % 10 == 0 {
                    *x /= 10
                }
            };
            Some(*x)
        })
        .collect()
}
