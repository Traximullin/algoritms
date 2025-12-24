pub fn minimum_boxes(a: Vec<i32>, c: Vec<i32>) -> i32 {
    let mut s = a.iter().sum::<i32>();
    let mut f = [0; 51];
    for c in c {
        f[c as usize] += 1
    }
    let mut j = 50;
    (1..51)
        .find(|i| {
            while f[j] < 1 {
                j -= 1
            }
            s -= j as i32;
            f[j] -= 1;
            s <= 0
        })
        .unwrap() as _
}
