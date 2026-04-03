pub fn reverse(x: i32) -> i32 {
    let mut n = x;
    let mut rev: i32 = 0;

    while n != 0 {
        let digit = n % 10;
        n /= 10;

        if rev > i32::MAX / 10 || rev < i32::MIN / 10 {
            return 0;
        }

        rev = rev * 10 + digit;
    }

    rev
}
