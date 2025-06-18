pub fn divide_array(mut nums: Vec<i32>, k: i32) -> Vec<Vec<i32>> {
    let mut r: Vec<Vec<i32>> = Vec::new();

    nums.sort();

    if nums.len() % 3 != 0 {
        return vec![];
    }

    for i in (0..nums.len()).step_by(3) {
        let group = &nums[i..i + 3];

        if group[2] - group[0] > k {
            return vec![];
        }

        r.push(group.to_vec());
    }

    r
}
