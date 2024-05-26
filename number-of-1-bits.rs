pub fn hamming_weight(n: i32) -> i32 {
    let mut c = 0;

    let binary_n = format!("{:b}", n);

    for char in binary_n.chars() {
        if char == '1' {
            c += 1;
        }
    }

    c
}