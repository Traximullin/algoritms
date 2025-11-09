pub fn count_operations(num1: i32, num2: i32) -> i32 {
    match num1 == 0 || num2 == 0 {
        true => 0,
        false => num1 / num2 + Self::count_operations(num2, num1 % num2),
    }
}
