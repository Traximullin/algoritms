pub fn difference_of_sums(n: i32, m: i32) -> i32 {
    let mut sum_1 = 0;
    let mut sum_2 = 0;

    for i in 0..=n {
        if i % m == 0 {
            sum_1 += i;
        } else {
            sum_2 += i;
        }
    }

    sum_2 - sum_1
}
