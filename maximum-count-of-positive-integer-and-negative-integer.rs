use std::cmp;

pub fn maximum_count(nums: Vec<i32>) -> i32 {
    let (mut pos, mut neg) = (0, 0);

    for num in nums {
        if num > 0 {
            pos += 1;
        } else if num < 0 {
            neg += 1
        };
    }

    pos.max(neg)
}
