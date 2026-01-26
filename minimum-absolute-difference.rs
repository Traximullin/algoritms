pub fn minimum_abs_difference(arr: Vec<i32>) -> Vec<Vec<i32>> {
    let n = arr.len();
    let mut nums = arr;
    nums.sort_unstable();

    let mut output: Vec<Vec<i32>> = vec![vec![nums[0], nums[1]]];
    let mut min = nums[1] - nums[0];

    for i in (1..n).skip(1) {
        let diff = nums[i] - nums[i - 1];

        if diff < min {
            min = diff;
            output = vec![];
        }
        if diff == min {
            output.push(vec![nums[i - 1], nums[i]]);
        }
    }
    output
}
