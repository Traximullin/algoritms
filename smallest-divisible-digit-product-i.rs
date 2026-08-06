pub fn smallest_number(n: i32, t: i32) -> i32 {
    (n..)
        .find(|n| {
            std::iter::successors(Some(*n), |n| Some(n / 10))
                .map_while(|n| (n > 0).then_some(n % 10))
                .product::<i32>()
                % t
                == 0
        })
        .unwrap()
}
