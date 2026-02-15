pub fn add_binary(a: String, b: String) -> String {
    let mut ai = a.chars().rev().map(|x| u32::from(x != '0'));
    let mut bi = b.chars().rev().map(|x| u32::from(x != '0'));
    let mut carry: u32 = 0;
    let mut sum: Vec<char> = Vec::new();

    for i in 0..a.len().max(b.len()) {
        let sumval: u32 = ai.next().unwrap_or(0) + bi.next().unwrap_or(0) + carry;
        sum.push(char::from_digit(sumval % 2, 2).unwrap());
        carry = sumval / 2;
    }

    if 0 < carry {
        sum.push('1');
    }

    sum.iter().rev().collect()
}
