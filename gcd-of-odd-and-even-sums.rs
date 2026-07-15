pub fn gcd_of_odd_even_sums(n: i32) -> i32 {
    let mut sum_odd = 0;
    let mut sum_even = 0;

    let mut curr_odd = 1;
    let mut curr_even = 2;

    for _ in 0..n {
        sum_odd += curr_odd;
        sum_even += curr_even;

        curr_odd += 2;
        curr_even += 2;
    }

    Self::gcd(sum_odd, sum_even)
}

fn gcd(x: i32, y: i32) -> i32 {
    if y == 0 {
        return x;
    }

    return Self::gcd(y, x % y);
}
