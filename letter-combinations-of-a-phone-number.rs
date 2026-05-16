use itertools::Itertools;

const BUTTON_MAP: [&[u8]; 8] = [
    b"abc",     // 2
    b"def",     // 3
    b"ghi",     // 4
    b"jkl",     // 5
    b"mno",     // 6
    b"pqrs",    // 7
    b"tuv",     // 8
    b"wxyz",    // 9
];

pub fn letter_combinations(digits: String) -> Vec<String> {
    if digits.is_empty() {
        return vec![];
    }

    digits
        .bytes()
        .map(|d| BUTTON_MAP[(d - b'2') as usize].to_vec())
        .multi_cartesian_product()
        .map(|v| String::from_utf8(v).unwrap())
        .collect()
}
