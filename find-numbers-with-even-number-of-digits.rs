pub fn find_numbers(nums: Vec<i32>) -> i32 {
    let mut c = 0;

    for num in nums {
        if num.to_string().len() % 2 == 0 {
            c += 1;
        }
    }

    c
}
