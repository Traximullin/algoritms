pub fn is_one_bit_character(bits: Vec<i32>) -> bool {
    bits.into_iter()
        .rev()
        .skip(1)
        .take_while(|&b| b == 1)
        .count()
        & 1
        == 0
}
