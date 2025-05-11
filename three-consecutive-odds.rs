pub fn three_consecutive_odds(arr: Vec<i32>) -> bool {
    let mut c = 0;

    for item in arr {
        if item % 2 != 0 {
            c += 1;

            if c == 3 {
                return true;
            }
        } else {
            c = 0;
        }
    }

    return false;
}
