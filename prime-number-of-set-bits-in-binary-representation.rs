pub fn count_prime_set_bits(left: i32, right: i32) -> i32 {
    (left..=right).map(i32::count_ones).fold(0, |acc, n| {
        acc + i32::from([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31].contains(&n))
    })
}
