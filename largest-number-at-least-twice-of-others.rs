pub fn dominant_index(nums: Vec<i32>) -> i32 {
    let mut search_index = 0;
    let max_value = nums.iter().max().unwrap();
    let diff = max_value / 2;

    for i in 0..nums.len() {
        let num = nums[i];

        if num == *max_value {
            search_index = i;
            continue;
        }

        if num > diff {
            return -1;
        }


    }

    return search_index as i32;
}