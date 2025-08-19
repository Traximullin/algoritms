pub fn zero_filled_subarray(nums: Vec<i32>) -> i64 {
    let mut r = 0;
    let mut c = 0;

    for num in nums {
        if num == 0 {
            c += 1;
        } else {
            c = 0;
        }

        r += c;
    }

    return r;
}
