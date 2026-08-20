pub fn result_array(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut xs = vec![0; n];

    xs[0] = nums[0];
    xs[n - 1] = nums[1];
    let mut a = 0;
    let mut b = n - 1;

    for i in 2..n {
        let x = nums[i];
        let v1 = xs[a];
        let v2 = xs[b];
        if v1 > v2 {
            a += 1;
            xs[a] = x;
        } else {
            b -= 1;
            xs[b] = x;
        }
    }

    let m = (n - b) / 2;
    for i in 0..m {
        let x = xs[b + i];
        let y = xs[n - 1 - i];
        xs[b + i] = y;
        xs[n - 1 - i] = x;
    }

    xs
}
