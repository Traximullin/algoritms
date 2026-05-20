use std::collections::HashSet;

impl Solution {
    pub fn find_the_prefix_common_array(a: Vec<i32>, b: Vec<i32>) -> Vec<i32> {
        let mut common_nums = HashSet::from([a[0], b[0]]);
        let mut c = vec![if a[0] == b[0] { 1 } else { 0 }];
        for i in 1..a.len() {
            let mut d = 0;
            if a[i] == b[i] {
                d += 1;
                common_nums.insert(a[i]);
            } else {
                if !common_nums.insert(a[i]) {
                    d += 1;
                }
                if !common_nums.insert(b[i]) {
                    d += 1;
                }
            }
            c.push(c[i - 1] + d);
        }
        c
    }
}
