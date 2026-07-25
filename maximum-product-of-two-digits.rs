impl Solution {
    pub fn max_product(n: i32) -> i32 {
        std::iter::successors(Some(n), |n| n.is_positive().then(|| n / 10))
            .map(|n| n % 10)
            .fold([0; 2], |[mut pm, mut m], n| {
                if n > pm {
                    pm = if n > m {
                        std::mem::replace(&mut m, n)
                    } else {
                        n
                    };
                }
                [pm, m]
            })
            .into_iter()
            .product()
    }
}
